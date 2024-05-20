import Image from "next/image";
import Sidenav from "./components/Sidenav";
import Board from "./components/Board";

export default function Home() {
  return (
    <main className="flex">
      <Sidenav/>
      <Board/>
    </main>
  );
}
