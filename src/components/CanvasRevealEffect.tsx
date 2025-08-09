"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Box from "@mui/material/Box";
import { Mesh, BufferGeometry, Material } from "three";

// ===================== MAIN COMPONENT =====================
export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerSx,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerSx?: object;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <Box sx={{ height: "100%", width: "100%", position: "relative", ...containerSx }}>
      {/* 🎨 Dot Matrix Pattern */}
      <DotMatrix
        colors={colors}
        dotSize={dotSize}
        opacities={opacities}
        shader={`
          float animation_speed_factor = ${animationSpeed.toFixed(1)};
          float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
          opacity *= step(intro_offset, u_time * animation_speed_factor);
          opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
        `}
        center={["x", "y"]}
      />

      {/* 🌈 Optional gradient overlay */}
      {showGradient && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0a0a0a, transparent 84%)",
          }}
        />
      )}
    </Box>
  );
};

// ===================== DOT MATRIX =====================
interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  // ✅ Build uniforms for shader
  const uniforms = useMemo(() => {
    let colorsArray = Array(6).fill(colors[0]);
    if (colors.length === 2) {
      colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    } else if (colors.length === 3) {
      colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    }

    return {
      u_colors: {
        value: colorsArray.map((c) => [c[0] / 255, c[1] / 255, c[2] / 255]),
      },
      u_opacities: { value: opacities },
      u_total_size: { value: totalSize },
      u_dot_size: { value: dotSize },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return <Shader source={getShader(shader, center)} uniforms={uniforms} />;
};

// ===================== SHADER CANVAS =====================
interface ShaderProps {
  source: string;
  uniforms: Record<string, { value: unknown }>;
}

const Shader: React.FC<ShaderProps> = ({ source, uniforms }) => {
  return (
    <Canvas style={{ position: "absolute", inset: 0 }}>
      <ShaderMaterial source={source} uniforms={uniforms} />
    </Canvas>
  );
};

// ===================== SHADER MATERIAL =====================
const ShaderMaterial = ({
  source,
  uniforms,
}: {
  source: string;
  uniforms: Record<string, { value: unknown }>;
}) => {
  const { size } = useThree();

  // ✅ Type-safe ref for Three.js mesh
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null);

  // 🎞 Update the shader time uniform every frame
  useFrame(({ clock }) => {
    if (!ref.current) return;

    const material = ref.current.material;
    if (Array.isArray(material)) return; // skip if array

    const shaderMaterial = material as THREE.ShaderMaterial;
    shaderMaterial.uniforms.u_time.value = clock.getElapsedTime();
  });

  // ✅ Create the shader material once
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          gl_Position = vec4(position.xy, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: {
        ...(uniforms as Record<string, THREE.IUniform>),
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(size.width * 2, size.height * 2) },
      },
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [size.width, size.height, source, uniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

// ===================== SHADER GLSL =====================
const getShader = (shader: string, center: ("x" | "y")[]) => `
  precision mediump float;
  in vec2 fragCoord;
  uniform float u_time;
  uniform float u_opacities[10];
  uniform vec3 u_colors[6];
  uniform float u_total_size;
  uniform float u_dot_size;
  uniform vec2 u_resolution;
  out vec4 fragColor;

  float PHI = 1.61803398874989484820459;
  float random(vec2 xy) {
    return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
  }

  void main() {
    vec2 st = fragCoord.xy;
    ${
      center.includes("x")
        ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));"
        : ""
    }
    ${
      center.includes("y")
        ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));"
        : ""
    }

    float opacity = step(0.0, st.x);
    opacity *= step(0.0, st.y);
    vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
    float frequency = 5.0;
    float show_offset = random(st2);
    float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
    opacity *= u_opacities[int(rand * 10.0)];
    opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
    opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
    vec3 color = u_colors[int(show_offset * 6.0)];

    ${shader}

    fragColor = vec4(color, opacity);
    fragColor.rgb *= fragColor.a;
  }
`;
