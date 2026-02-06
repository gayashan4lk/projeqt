import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-4xl">Welcome to PROJEQT</h1>
        <Button variant="default" asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </main>
    </div>
  );
}
