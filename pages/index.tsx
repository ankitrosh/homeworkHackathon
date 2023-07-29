import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <div className="max-w-[800px] mt-20 max-h-[300px] mx-auto bg-slate-100 rounded-2xl flex flex-col p-10">
        <div className="flex justify-between">
          <p className="mb-4">Enter your question:</p>
          <Link href="/questions">
            {" "}
            <p className="flex cursor-pointer underline">
              Previous questions -&gt;{" "}
            </p>
          </Link>
        </div>
        <textarea className="w-full focus:ring-0 focus:border-none focus:outline-none resize-none rounded-2xl p-2 h-[400px]" />
        <button className="bg-red-400 w-fit px-4 py-2 mt-4 rounded-xl">
          {" "}
          Submit -&gt;
        </button>
      </div>
    </main>
  );
}
