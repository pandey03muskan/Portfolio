import Head from "next/head"
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sotware Engineer - Muskan Pandey</title>
        <meta name="description" content="muskan pandey portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pro4.png" />
        </Head>
        <main>
           <HomePage/>
        </main>
    </>
  );
}
