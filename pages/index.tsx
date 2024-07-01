import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Jihen Mansour</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Jihen Mansour | Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
      </Head>
      <Home />
    </>
  );
}
