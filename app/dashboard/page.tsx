import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Dashboard() {
  return (
    <div>
      <main>
        <h1 className="text-4xl">Dashboard</h1>
				<Button variant="default">
					<Link href="/">Go back to Home</Link>
				</Button>
      </main>
    </div>
  );
}
