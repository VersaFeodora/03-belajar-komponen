import Image from "next/image";
import { Gallery } from "@/components/gallery";


export default function Home() {
  return(
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-center">
          Ilmuwan yang luar biasa
      </p>
      <Gallery />
    </main>
  );
}
