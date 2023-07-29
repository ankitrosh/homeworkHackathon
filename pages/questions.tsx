import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const questions = [
  {
    id: 1,
    question: "What are text embeddings",
  },
  {
    id: 2,
    question: "What is our backend",
  },
];

export default function Home() {
  return (
    <main className="bg-white h-screen">
      {questions.map((item) => {
        return (
          <Link href={`answers/${item.id}`}>
            <div
              key={item.id}
              className="max-w-[800px] justify-between mt-20 max-h-[300px] mx-auto bg-slate-100 rounded-2xl flex p-10"
            >
              <p>{item.question}</p> <p>-&gt;</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
