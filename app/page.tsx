import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-4xl">Welcome to PROJEQT</h1>
        <Link href="/dashboard">Go to Dashboard</Link>
      </main>
    </div>
  );
}
