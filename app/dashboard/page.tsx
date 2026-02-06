import Link from "next/link"

export default function Dashboard() {
  return (
    <div>
      <main>
        <h1 className="text-4xl">Dashboard</h1>
				<Link href="/">Go back to Home</Link>
      </main>
    </div>
  );
}
