import Image from "next/image";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";


export default function Home() {
  return(
    <main className="flex flex-col items-center justify-between p-24">
      <section>
        <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
    </main>
  );
}
