import Head from "next/head";
import { Calendar, Header, Toolbar } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 lg:p-16 bg-slate-300">
      <Head>
        <title>_holidays</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col w-full p-2 space-y-5 bg-gray-100 rounded-md shadow-xl max-w-7xl sm:p-4 md:p-6 lg:p-8">
        <Toolbar />
        <Calendar />
      </div>
    </div>
  );
}
