import Image from "next/image";
import Sidenav from "./components/Sidenav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidenav/>
    </main>
  );
}
