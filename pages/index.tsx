import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <main className="bg-white h-screen">
      <div className="max-w-[800px] mt-20 max-h-[300px] mx-auto bg-slate-100 rounded-2xl flex flex-col p-10">
        <p className="mb-4">Enter your question:</p>

        <textarea
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="w-full focus:ring-0 focus:border-none focus:outline-none resize-none rounded-2xl p-2 h-[400px]"
        />
        <div className="flex justify-between items-end">
          <button className="bg-red-500 text-white w-fit px-4 py-2 mt-4 rounded-xl">
            {" "}
            Submit -&gt;
          </button>
          <div className="">
            <Link href="/questions">
              {" "}
              <p className="flex cursor-pointer underline">
                Previous questions -&gt;{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
