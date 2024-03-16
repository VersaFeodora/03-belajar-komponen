import Image from "next/image";
import { Gallery } from "@/components/gallery";
import MyProfile2 from "@/components/myprofile2";


export default function Home() {
  return(
    <main className="flex flex-col items-center justify-between p-24">
        <MyProfile2 />
    </main>
  );
}
