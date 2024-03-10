import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import Courousal from "@/components/Courousal";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <ClientOnly>
      <Navbar />
      <Courousal />
      <div>
        <Sidebar />
      </div>
    </ClientOnly>
  );
}
