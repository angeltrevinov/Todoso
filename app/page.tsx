import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row gap-1">
      <Link href={"/login"}>Login</Link>
      <Link href={"/signup"}>Signup</Link>
    </main>
  );
}
