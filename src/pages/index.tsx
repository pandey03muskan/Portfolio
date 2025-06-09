import Head from "next/head"
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sotware Engineer - Muskan Pandey</title>
        <meta name="description" content="muskan pandey portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pro4.png" />
      </Head>
        <main className={styles.main}>
        </main>
    </>
  );
}
