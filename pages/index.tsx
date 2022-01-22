import { Calendar, Header, Toolbar } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 space-y-2 md:p-8 lg:p-16 bg-slate-300">
      <Header />
      <div className="flex flex-col w-full p-2 space-y-4 bg-gray-100 rounded-lg shadow-2xl shadow-slate-400 max-w-7xl sm:p-4 md:p-6 lg:p-8">
        <Toolbar />
        <Calendar />
      </div>
    </div>
  );
}
