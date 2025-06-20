import NonResButton from "@/components/commonComponent/NonResButton";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableRow
} from "@mui/material";


const sections = [
  { title: "About Me", 
    id: "about" ,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M13.559 10.575a2.2 2.2 0 0 0-.81-.51a8.4 8.4 0 0 0-1.75-.35c-.21 0-.43-.05-.64-.06h-.17a3.73 3.73 0 0 0 1.28-3.37a4 4 0 0 0-4.47-3.36a3.87 3.87 0 0 0-3.85 3.55a3.12 3.12 0 0 0 .9 2.32A13.5 13.5 0 0 0 2 13.525a4.14 4.14 0 0 0 .46 3.46h-.15a1.94 1.94 0 0 1-.85-.28v-.14a2.1 2.1 0 0 1-.12-.58c-.05-.42-.05-.85-.07-1.05L1 11.774c-.06-.79-.17-1.52-.24-2.28a13 13 0 0 1-.07-1.51a.29.29 0 1 0-.58 0A14 14 0 0 0 0 9.525v2.31c0 .77 0 1.28.05 1.92q.023.657.12 1.31q.06.773.24 1.53c.073.317.249.602.5.81c.208.12.435.204.67.25l-.42 1.45c-.08.27-.14.54-.2.819c-.06.28-.1.56-.14.84c-.09.66-.16 1.32-.23 2a.33.33 0 1 0 .64.13c.2-.64.42-1.26.61-1.9c.08-.28.15-.55.21-.83q.098-.42.15-.85c.06-.52.07-1 .08-1.56h1.4c.4 0 .68.16 1 .23a2.8 2.8 0 0 1 1.42.54q.243.21.43.47c.14.19.25.39.37.59c.26.52.55 2.39 1.14 3.15a1.23 1.23 0 0 0 .8.51a1.35 1.35 0 0 0 1.2-.49a5.3 5.3 0 0 0 1-3.36a5.54 5.54 0 0 0-.83-3.31a2.5 2.5 0 0 0-.74-.62c-.5-.28-1.07-.38-1.58-.66a17 17 0 0 1 0-1.84a.33.33 0 0 0-.455-.407a.34.34 0 0 0-.175.187c0 .1-.08 1.52-.08 2.09a.74.74 0 0 0 .19.51c.55.36 1.18.49 1.73.82q.284.173.48.44a4.67 4.67 0 0 1 .53 2.77a4.18 4.18 0 0 1-.78 2.61c-.11.11-.19.19-.28.19s-.05 0-.07-.07a1.4 1.4 0 0 1-.2-.34c-.42-.87-.64-2.26-.86-2.69a5.6 5.6 0 0 0-.46-.73a3.5 3.5 0 0 0-.61-.66a2.9 2.9 0 0 0-.8-.47a7.5 7.5 0 0 0-1.59-.34a2.4 2.4 0 0 1-1.18-.41c-.65-.53-.67-1.61-.48-2.75a12.5 12.5 0 0 1 1.69-4.53a4.6 4.6 0 0 0 2.31.8a.28.28 0 0 0 .32-.25a.28.28 0 0 0-.25-.32c-2.03-.33-2.87-1.62-2.81-2.88a2.91 2.91 0 0 1 3-2.5a3 3 0 0 1 3.44 2.4a3.08 3.08 0 0 1-2.45 3.55a.33.33 0 1 0 .16.64a5.6 5.6 0 0 0 1-.33l.88.11q.367.045.72.15q.798.196 1.55.53a.82.82 0 0 1 .41.29c0 .05 0 .09-.11.17l-.25.22l-.54.28a3.8 3.8 0 0 1-1.29.21c-.76 0-1.54-.07-2.2-.08a.33.33 0 0 0-.36.3a.33.33 0 0 0 .31.35c.78.1 1.74.32 2.62.35c.424 0 .845-.064 1.25-.19q.17-.045.33-.12q.24-.093.46-.23l.52-.44c.49-.79.39-1.27.05-1.62m7.539-4.589a.34.34 0 0 0-.44.15c-.16.31-.31.63-.45.95c-.19.47-.36 1-.52 1.44s-.28.79-.39 1.19q-.12.419-.18.85l-.05.65h-.87c-.73.08-1.46.16-2.2.28s-.89.13-1.6.29s-.45.67-.14.6c.58-.06.82 0 1.4 0c.86 0 1.72-.06 2.58 0h1.23a.72.72 0 0 0 .62-.39q.078-.229.09-.47v-.77q.023-.374.09-.74c.07-.39.17-.78.26-1.16s.23-1 .37-1.45c.1-.31.21-.61.33-.91a.32.32 0 0 0-.13-.51"></path><path d="M23.679 13.654c-1.36-.13-2.71-.24-4.07-.27h-1.75c-.58 0-1.17 0-1.75.1c-1.35.13-2.69.36-4 .59a.29.29 0 0 0 .06.57c1.55-.08 3.08-.08 4.61-.11h.68c-.08.73-.18 1.45-.2 2.18v1.54c0 .66.1 1.31.15 2a4.4 4.4 0 0 0-.95.16a7.5 7.5 0 0 0-2.31 1.22a.31.31 0 0 0-.1.4a.3.3 0 0 0 .4.1a8.3 8.3 0 0 1 2.24-.69q.473-.075.95-.09q.47-.037.94 0a5.15 5.15 0 0 1 2.13.79a.332.332 0 0 0 .4-.53a5.46 5.46 0 0 0-2.33-1.28a3.5 3.5 0 0 0-.65-.11c.08-.63.14-1.27.18-1.9v-2c-.05-.63-.13-1.25-.2-1.87h.95l2.31-.11h2.3a.33.33 0 0 0 .33-.36a.33.33 0 0 0-.32-.33m-7.18-9.759a2.2 2.2 0 0 0-.67 0a2 2 0 0 0-.67.16a2.52 2.52 0 0 0-1.16 1.04a.292.292 0 0 0 .45.37a2.06 2.06 0 0 1 1.07-.41l.48-.07q.245-.015.49 0a2.64 2.64 0 0 1 1.17.14a.31.31 0 0 0 .44-.1a.33.33 0 0 0-.1-.46a3.07 3.07 0 0 0-1.5-.67m-3.73-.7a6.6 6.6 0 0 1 2.44-1.1a7.3 7.3 0 0 1 1.73-.26a3.8 3.8 0 0 1 2.67.8a.33.33 0 0 0 .47 0a.34.34 0 0 0 0-.46a4.26 4.26 0 0 0-2.69-1.39a5.8 5.8 0 0 0-1.32 0a6 6 0 0 0-1.25.31a6.26 6.26 0 0 0-2.44 1.68a.29.29 0 0 0 0 .41a.3.3 0 0 0 .39.01"></path></g></svg>,
    description: (
      <>
       <div style={{fontSize:"1.2rem"}}>
        I am a <strong>Software Development Engineer</strong>, currently working at
        <strong style={{color:"#00ffff"}}> Initializ Labs</strong>, where I’m part of the <strong style={{color:"#00ffff"}}>Product Team</strong>.
        <br />
        I’ve worked with <strong>Golang</strong> for developing a <strong>Command Line Tool</strong>,
        and also contributed to the <strong>Frontend Team</strong>.
       </div>
       <div style={{paddingTop:"1.5rem", display:"flex", gap:1}}>
            <div style={{fontSize:"1.3rem"}}>Find me on</div>
            <div style={{marginLeft:"20px"}}>
              <a className="iconHover" href="https://github.com/pandey03muskan" style={{marginRight:"10px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8m-9.64 6.81v-1.49c-1.9.426-2.31-.852-2.31-.852c-.306-.828-.758-1.04-.758-1.04c-.622-.438.045-.438.045-.438c.69.047 1.05.734 1.05.734c.611 1.09 1.6.781 1.99.592c.057-.462.238-.781.43-.959c-1.52-.166-3.11-.781-3.11-3.53c0-.781.271-1.42.702-1.92c-.068-.177-.306-.911.068-1.89c0 0 .577-.189 1.88.734a6.4 6.4 0 0 1 1.71-.237c.577 0 1.17.083 1.71.237c1.3-.923 1.88-.734 1.88-.734c.374.982.136 1.72.068 1.89c.442.497.702 1.14.702 1.92c0 2.75-1.6 3.35-3.12 3.53c.25.225.501.651.501 1.33v2.09a7 7 0 0 0 5.21-6.77c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.3 2.29 6.07 5.36 6.81z" clipRule="evenodd"></path></svg>
              </a>
              <a className="iconHover" href="https://www.linkedin.com/in/muskan-pandey-36661a220/" style={{marginRight:"10px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M19.707 3H4.347a1.3 1.3 0 0 0-1.306 1.306v15.388c0 .696.58 1.306 1.306 1.306h15.3a1.3 1.3 0 0 0 1.307-1.306V4.277C21.013 3.581 20.432 3 19.707 3M8.354 18.3H5.713V9.735h2.642zM7.019 8.545a1.53 1.53 0 0 1-1.538-1.539c0-.841.696-1.538 1.538-1.538s1.54.697 1.54 1.538s-.64 1.54-1.54 1.54M18.371 18.3h-2.642v-4.152c0-.987-.029-2.293-1.393-2.293c-1.394 0-1.597 1.103-1.597 2.206V18.3h-2.642V9.735h2.584v1.19h.029c.377-.696 1.22-1.393 2.526-1.393c2.7 0 3.193 1.742 3.193 4.123V18.3z"></path></svg>
              </a>
              <a className="iconHover" href="https://drive.google.com/file/d/13s68bVROFS9EaOLZITjnzJb1DwhnIEVO/view?usp=sharing">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></path></svg>
              </a>
            </div>
       </div>
      </>
    ),},
    { 
    title: "Experience", 
    id: "experience",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M17 7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-3-1h-4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1M6 9h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" clipRule="evenodd"></path></svg> ,
    description: (
      <> 
        <span style={{fontSize:"1.2rem"}}><strong style={{color:"#00FFFF"}}>05/2024 - 05/2025</strong> Software Development Engineer Intern @initializ Labs</span>
        <br />
        <span style={{fontSize:"1.2rem"}}><strong style={{color:"#00FFFF"}}>06/2025 - Present</strong> Software Development Engineer - 1 @initializ Labs</span>
      </>
    )
    },
  { title: "Technologies", 
    id: "technologies",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zm6.03 3.03a.75.75 0 1 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06L7.81 12zm4-1.06a.75.75 0 1 0-1.06 1.06L16.19 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06z"></path></svg>,
    description: (
        <>
<TableContainer>
  <Table
    sx={{
      border: "none",
      '& .MuiTableCell-root': { borderBottom: 'none' },
    }}
  >
    <TableBody>
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold', width: '300px',color:"#00FFFF"}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={14} viewBox="0 0 18 14">
              <path fill="currentColor" d="m5.243 6.657l-4.95-4.95A1 1 0 1 1 1.707.293L7.364 5.95a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414zM9 11h8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"/>
            </svg>
            <span style={{fontSize:"1.2rem"}}>Programming Languages:</span>
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
                <NonResButton title={"JavaScript"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M12 14v-1h1.5v.5h2v-1H13c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1H16c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1M9 9v4.5H7.5v-1H6v1c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5V9z"></path></svg>}/>
                <NonResButton title={"Go"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="currentColor" d="M2.417 14.286c-.063 0-.078-.031-.047-.078l.328-.422c.031-.047.104-.078.167-.078h5.563c.063 0 .078.047.047.094l-.266.406a.23.23 0 0 1-.156.094zM.063 15.719c-.063 0-.078-.031-.047-.078l.328-.422c.031-.042.109-.073.172-.073H7.62c.063 0 .094.047.078.094l-.125.37c-.016.063-.078.094-.141.094zm3.77 1.432c-.063 0-.078-.047-.047-.089l.219-.391c.031-.047.094-.094.156-.094h3.115c.063 0 .094.047.094.109l-.031.375c0 .063-.063.109-.109.109zm16.172-3.146c-.979.25-1.651.438-2.62.688c-.234.063-.245.078-.453-.156c-.229-.266-.401-.438-.729-.594c-.984-.479-1.932-.344-2.818.234c-1.063.688-1.604 1.698-1.589 2.958c.01 1.25.87 2.276 2.099 2.448c1.063.141 1.948-.234 2.651-1.026c.141-.172.266-.359.422-.578h-3.01c-.323 0-.406-.203-.297-.469a26 26 0 0 1 .797-1.698a.43.43 0 0 1 .391-.25h5.672c-.031.422-.031.844-.094 1.266a6.65 6.65 0 0 1-1.281 3.052c-1.12 1.479-2.583 2.401-4.438 2.646c-1.526.203-2.948-.094-4.193-1.026c-1.151-.87-1.807-2.026-1.979-3.458c-.198-1.698.297-3.224 1.328-4.568c1.104-1.448 2.568-2.365 4.359-2.693c1.464-.266 2.87-.094 4.13.76c.828.547 1.417 1.297 1.807 2.198c.094.141.031.219-.156.266zm5.156 8.62c-1.417-.036-2.708-.438-3.802-1.375a4.9 4.9 0 0 1-1.682-3.005c-.281-1.76.203-3.318 1.26-4.708c1.141-1.495 2.51-2.271 4.365-2.599c1.589-.281 3.083-.125 4.443.797c1.229.839 1.995 1.974 2.193 3.469c.266 2.104-.339 3.818-1.792 5.286c-1.026 1.042-2.286 1.698-3.74 1.99c-.417.083-.839.094-1.245.146zm3.709-6.297c-.016-.203-.016-.359-.047-.516c-.281-1.542-1.698-2.411-3.177-2.073c-1.448.328-2.385 1.25-2.729 2.714c-.276 1.214.313 2.448 1.438 2.943c.854.375 1.714.328 2.536-.094c1.234-.641 1.901-1.635 1.979-2.974"></path></svg>}/>
          </Box>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ fontWeight: 'bold', width: '300px',color:"#00FFFF"}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24"><path fill="currentColor" d="M0 12a11.95 11.95 0 0 1 2.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12m22.271-6.208A11.94 11.94 0 0 1 24 12c0 6.627-5.373 12-12 12q-1.193-.002-2.32-.224zM4.295 2.8A11.95 11.95 0 0 1 12 0c2.933 0 5.62 1.052 7.705 2.8z"></path></svg>
            <span style={{fontSize:"1.2rem"}}>Framework & Library:</span>
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
              <NonResButton title={"React"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654m8.005 1.938q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5q-.279.286-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659q.089-.262.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63M4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.5 20.5 0 0 0-.422 2.678A21 21 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452m3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178m0 3.94a7.2 7.2 0 0 1-2.64.094a1.77 1.77 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.5 20.5 0 0 0 2.107 1.7a21 21 0 0 0 .426 2.712q-.25.063-.505.114m7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a19 19 0 0 1 1.739-.635a18 18 0 0 1 .306 1.811M9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.5 20.5 0 0 0-2.526.97a20 20 0 0 0-2.52-.981q.087-.3.188-.596m-.4 1.424a18 18 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823m-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18 18 0 0 1-1.744.665a19 19 0 0 1-.322-1.853m5.456 3.146a7.2 7.2 0 0 1-1.238 2.333a1.77 1.77 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20 20 0 0 0 2.53-1.01a21 21 0 0 0 2.547.979q-.072.249-.155.494m.362-1.324a19 19 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18 18 0 0 1-.295 1.838m.447-4.743q0 .911-.057 1.82q-.741.502-1.554.972q-.81.467-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24 24 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831m.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20 20 0 0 0-2.144-1.688a20 20 0 0 0-.405-2.649q.31-.076.608-.135m-.13 3.885a18 18 0 0 1 1.462 1.188a18 18 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208m3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20 20 0 0 0 .387-2.682a20 20 0 0 0 2.137-1.715q.177.183.336.364a7.2 7.2 0 0 1 1.403 2.238a1.77 1.77 0 0 1 .054 1.403"></path></svg>}/>
              <NonResButton title={"Next.js"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17.664 17.65L10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 1 1 1.578-1.23M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-10V8h2v4z"></path></svg>}/>  
              <NonResButton title={"Cobra CLI"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512"><path fill="currentColor" d="M185.705 51.72c-5.27 0-9.55 12.73-9.55 28.43s4.29 28.43 9.56 28.43s9.55-12.73 9.55-28.43s-4.29-28.43-9.56-28.43m140.07 0c-5.27 0-9.51 12.73-9.51 28.43s4.23 28.42 9.51 28.42v.01c5.28 0 9.55-12.73 9.55-28.43s-4.28-28.43-9.55-28.43m-82.74 37.75l13.72 23.76l13.71-23.76zm12.97 50.09c-.4.46-.905.924-1.32 1.32a128.63 128.63 0 0 1-59 35c-5.19 75.01 13 104.16 13 104.16s-24.57-15.91-37.35-100a128.4 128.4 0 0 1-53.602-7.52a306.7 306.7 0 0 0 19.001 52.25c12.19 26.08 43.29 55.18 52.75 84.51c24.78 76.7 2.85 151 66.51 151s41.772-74.3 66.522-151c9.46-29.34 40.55-58.43 52.75-84.51a306.7 306.7 0 0 0 19-52.25a128.4 128.4 0 0 1-44.32 7.84a130 130 0 0 1-15.49-.93c-12.75 84.63-37.44 100.63-37.44 100.63s18.5-29.65 12.85-106.09a128.8 128.8 0 0 1-52.6-33.09zm-6.61 123.06h18.4c0 23.34-7.41 37.62-12.82 48.05c-4.83 9.32-6.9 13.72-5.09 20.19c2.51 9 6.8 14.09 11.8 20c13.85 16.4 22.86 31.79 12.52 80.62l-5.69-24l-12.31 20.23c9.27-43.86 1-53.66-8.58-65c-5.57-6.6-11.88-14.07-15.46-26.91c-3.84-13.72 1.44-23.89 6.48-33.6s10.75-20.72 10.75-39.58"/></svg>}/>
              <NonResButton title={"MUI"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.229 15.793a.7.7 0 0 0 .244-.243a.7.7 0 0 0 .09-.333l.012-3.858a.7.7 0 0 1 .09-.333a.7.7 0 0 1 .245-.243L23 9.58a.7.7 0 0 1 .333-.088a.7.7 0 0 1 .333.09a.7.7 0 0 1 .244.243a.7.7 0 0 1 .089.333v7.014a.67.67 0 0 1-.335.578l-7.893 4.534a.67.67 0 0 1-.662 0l-6.194-3.542a.67.67 0 0 1-.246-.244a.67.67 0 0 1-.09-.335v-3.537q.001-.007.008-.004q.01.003.008-.005v-.004q0-.004.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01l-.004-.002l-.001-.004l.01-3.467a.67.67 0 0 0-.333-.58a.67.67 0 0 0-.667 0L8.912 9.799a.67.67 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.67.67 0 0 1-.332.577a.7.7 0 0 1-.332.09a.7.7 0 0 1-.333-.088L.336 13.825a.67.67 0 0 1-.246-.244a.67.67 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.67.67 0 0 0 .665 0l7.228-4.153a.7.7 0 0 1 .333-.088a.7.7 0 0 1 .333.09a.7.7 0 0 1 .244.244a.7.7 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.67.67 0 0 1-.245.244l-3.785 2.18a.67.67 0 0 0-.245.245a.67.67 0 0 0-.089.334a.67.67 0 0 0 .09.334a.67.67 0 0 0 .247.244l2.088 1.189a.7.7 0 0 0 .33.087a.7.7 0 0 0 .332-.089zm.438-9.828a.67.67 0 0 0 .09.335a.67.67 0 0 0 .248.244a.67.67 0 0 0 .67-.008l2.001-1.2a.7.7 0 0 0 .237-.243a.7.7 0 0 0 .087-.329V2.32a.67.67 0 0 0-.091-.335a.67.67 0 0 0-.584-.33a.67.67 0 0 0-.334.094l-2 1.2a.7.7 0 0 0-.238.243a.7.7 0 0 0-.086.329z"/></svg>}/>
          </Box>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ fontWeight: 'bold',color:"#00FFFF"}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="currentColor" d="M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h1.992a2.5 2.5 0 0 1 .242-.28l.72-.72H3.5A1.5 1.5 0 0 1 2 10.5V5h10v.026a4.5 4.5 0 0 1 1 .004V3.5A2.5 2.5 0 0 0 10.5 1zm5.431 5.724l-.577-.578a.5.5 0 1 0-.708.708l.745.744q.216-.461.54-.874m-2.577.13a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L4.707 8.5zm6.538-.83c.366.042.471.48.21.742l-.975.975a1.507 1.507 0 1 0 2.132 2.132l.975-.975c.261-.261.7-.156.742.21a3.518 3.518 0 0 1-4.676 3.723l-2.726 2.727a1.507 1.507 0 1 1-2.132-2.132L9.168 10.7a3.518 3.518 0 0 1 3.724-4.676"></path></svg>
            <span style={{fontSize:"1.2rem"}}>Tools:</span>
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <NonResButton title={"VS Code"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17 16.47V7.39l-6 4.54M2.22 9.19a.86.86 0 0 1-.02-1.15l1.2-1.11c.2-.18.69-.26 1.05 0l3.42 2.61l7.93-7.25c.32-.32.87-.45 1.5-.12l4 1.91c.36.21.7.54.7 1.15v13.5c0 .4-.29.83-.6 1l-4.4 2.1c-.32.13-.92.01-1.13-.2l-8.02-7.3l-3.4 2.6c-.38.26-.85.19-1.05 0l-1.2-1.1c-.32-.33-.28-.87.05-1.2l3-2.7"></path></svg>}/>
            <NonResButton title={"Github"} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"></path></svg>}/>
          </Box>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ fontWeight: 'bold', width: '300px',color:"#00FFFF"}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{fontSize:"1.2rem"}}>Basics:</span>
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <NonResButton title={"Database"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.775 0-6.387-1.162T3 17V7q0-1.65 2.638-2.825T12 3t6.363 1.175T21 7v10q0 1.675-2.613 2.838T12 21m0-11.975q2.225 0 4.475-.638T19 7.025q-.275-.725-2.512-1.375T12 5q-2.275 0-4.462.638T5 7.025q.35.75 2.538 1.375T12 9.025M12 14q1.05 0 2.025-.1t1.863-.288t1.675-.462T19 12.525v-3q-.65.35-1.437.625t-1.675.463t-1.863.287T12 11t-2.05-.1t-1.888-.288T6.4 10.15T5 9.525v3q.625.35 1.4.625t1.663.463t1.887.287T12 14m0 5q1.15 0 2.338-.175t2.187-.462t1.675-.65t.8-.738v-2.45q-.65.35-1.437.625t-1.675.463t-1.863.287T12 16t-2.05-.1t-1.888-.288T6.4 15.15T5 14.525V17q.125.375.788.725t1.662.638t2.2.462T12 19"></path></svg>
}/>
            <NonResButton title={"Network"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="M13.5 13.25L10 15.5l-3.5-2.25v-3.5L10 7.5l3.5 2.25zm-9-6.5L2.5 8l-2-1.25v-2l2-1.25l2 1.25zm15-2L17.5 6l-2-1.25v-2l2-1.25l2 1.25zm-15 16.5l-2 1.25l-2-1.25v-2l2-1.25l2 1.25zm16.5 1l-2 1.25l-2-1.25v-2L19 19l2 1.25zm1.5-9.75l-2 1.25l-2-1.25v-2l2-1.25l2 1.25zm-16-2.75L3.813 7.18m13.883 12.635l-5.968-5.426M18.5 11.5h-5m-5.548 2.684l-4.27 4.555M16.318 5.261l-3.686 3.931" strokeWidth={1}></path></svg>}/>
            <NonResButton title={"OOPs"} icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M14 20v-2h3q.425 0 .713-.288T18 17v-2q0-.95.55-1.725t1.45-1.1v-.35q-.9-.325-1.45-1.1T18 9V7q0-.425-.288-.712T17 6h-3V4h3q1.25 0 2.125.875T20 7v2q0 .425.288.713T21 10h1v4h-1q-.425 0-.712.288T20 15v2q0 1.25-.875 2.125T17 20zm-7 0q-1.25 0-2.125-.875T4 17v-2q0-.425-.288-.712T3 14H2v-4h1q.425 0 .713-.288T4 9V7q0-1.25.875-2.125T7 4h3v2H7q-.425 0-.712.288T6 7v2q0 .95-.55 1.725T4 11.825v.35q.9.325 1.45 1.1T6 15v2q0 .425.288.713T7 18h3v2z"></path></svg>}/>
          </Box>
        </TableCell>
      </TableRow>

    </TableBody>
  </Table>
</TableContainer>

        </>
    )
  },
  { title: "Recent Sparks", 
    id: "sparks",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 20 20"><path fill="currentColor" d="M7.398 12.809a1.04 1.04 0 0 0 1.204-.003c.178-.13.313-.31.387-.518l.447-1.373a2.34 2.34 0 0 1 1.477-1.479l1.391-.45a1.045 1.045 0 0 0-.044-1.98l-1.375-.448a2.34 2.34 0 0 1-1.48-1.477l-.452-1.388a1.044 1.044 0 0 0-1.973.017l-.457 1.4a2.34 2.34 0 0 1-1.44 1.45l-1.39.447a1.045 1.045 0 0 0 .016 1.974l1.374.445a2.33 2.33 0 0 1 1.481 1.488l.452 1.391c.072.204.206.38.382.504m.085-7.415l.527-1.377l.44 1.377a3.33 3.33 0 0 0 2.117 2.114l1.406.53l-1.382.447a3.34 3.34 0 0 0-2.115 2.117l-.523 1.378l-.449-1.379a3.34 3.34 0 0 0-.8-1.31a3.4 3.4 0 0 0-1.312-.812l-1.378-.522l1.386-.45a3.36 3.36 0 0 0 1.29-.813a3.4 3.4 0 0 0 .793-1.3m6.052 11.457a.806.806 0 0 0 1.226-.398l.248-.762a1.1 1.1 0 0 1 .26-.42c.118-.12.262-.208.42-.26l.772-.252a.8.8 0 0 0-.023-1.52l-.764-.25a1.08 1.08 0 0 1-.68-.678l-.252-.773a.8.8 0 0 0-1.518.01l-.247.762a1.07 1.07 0 0 1-.665.679l-.773.252a.8.8 0 0 0 .008 1.518l.763.247c.16.054.304.143.422.261c.119.119.207.263.258.422l.253.774a.8.8 0 0 0 .292.388m-.913-2.793L12.443 14l.184-.064a2.11 2.11 0 0 0 1.3-1.317l.058-.178l.06.181a2.08 2.08 0 0 0 1.316 1.316l.195.063l-.18.06a2.08 2.08 0 0 0-1.317 1.32l-.059.181l-.058-.18a2.08 2.08 0 0 0-1.32-1.323"></path></svg>,
    description: ""
   },
];

const HomePage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );
    
    const els = Array.from(document.querySelectorAll("[id]"));
    els.forEach(el => observer.observe(el as Element));
    return () => els.forEach(el => observer.unobserve(el as Element));
  }, []);

  return (
     <>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            opacity: 0.9
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "white",
            }}
          >
            Hi, I’m Muskan Pandey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color:"white",
              fontWeight: 600,
              fontSize:"1.1rem"
            }}
          >
            A Passionate Software Development Engineer
          </Typography>
        </Box>

        {/* Section Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
      {sections.map((section, idx) => {
        const isActive = active === section.id;
        return (
    <Box
      key={section.id}
      id={section.id}
      sx={{
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.5s, transform 0.5s",
        transform: isActive ? "scale(1.02)" : "scale(1)",
        border: "1px solid grey",
        borderRadius: "0.75rem",
        padding: "1.5rem 1rem",
        minHeight: "250px",

        // 👇 Hover style: affect the h5 inside when hovered
        "&:hover h5": {
          color: "#00ffff",
        },
      }}
    >
      {/* Spotlight overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
            <Box sx={{ position: "relative", zIndex: 1 }}>

                      <Typography
                      variant="h5"
                      sx=
                      {{ 
                          fontWeight: 600, 
                          display:"flex",
                          mb: 2, 
                          color: 
                          "white", 
                          zIndex: 1,
                          gap:1,
                          opacity:0.9,
                      }}
                      >
                      <span style={{color:"#00FFFF"}}>{section.icon}</span>
                      <span>{section.title}</span>
                      </Typography>
                      <Typography
                      variant="body1"
                      sx={{
                          color: "rgb(209 213 219)",
                          zIndex: 1,
                          fontSize:"1.1rem",
                          opacity: 0.7,
                      }}
                      >
                          {section.description}
                      </Typography>
            </Box>
          </Box>
        );
      })}

        </Box>
      </>
  );
};

export default HomePage;

