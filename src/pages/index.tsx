import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import WordDetail from "@/components/WordDetail/WordDetail";
import { Words } from "@/types/word";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<Words>([]);

  return (
    <div className="h-screen w-screen bg-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header setData={setData} />
        <WordDetail words={data} />
      </Layout>
    </div>
  );
}
