import Image from "next/image";
import { Welcome } from "./components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-gray-600">
      <Welcome />
    </main>
  );
}
