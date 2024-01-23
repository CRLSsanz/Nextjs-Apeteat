import Image from "next/image";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Welcome />
    </main>
  );
}
