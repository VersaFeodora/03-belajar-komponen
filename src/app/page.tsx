import Image from "next/image";
import Profile from "../components/profile";

export default function Home() {
  return(
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-center">
          Ilmuwan yang luar biasa
      </p>
      <div className="flex flex-row">
        <div><Profile /></div>
        <div><Profile /></div>
        <div><Profile /></div>
      </div>
    </main>
  );
}
