import { Button } from "@/components/ui/button"
import Link from "next/link"
import prisma from "@/lib/prisma";


export default async function Dashboard() {
  const projects = await prisma.project.findMany();

  return (
    <div>
      <main>
        <h1 className="text-4xl">Dashboard</h1>
				<Button variant="default">
					<Link href="/">Go back to Home</Link>
				</Button>
        <ol>
          {projects.map((project) => (
            <li key={project.id}>
              {project.name} | {project.status} | {project.startDate.toDateString()} - {project.deliveryDate.toDateString()} | {project.description}
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
