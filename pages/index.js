import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Akira Page</title>
      </Head>
      <h1>Hello, Welcome to my page!</h1>
      <Link href="/about">About</Link>
    </>
  );
}
