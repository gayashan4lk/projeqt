import { PrismaClient, Prisma } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import 'dotenv/config';

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({
	adapter,
})

const projectData: Prisma.ProjectCreateInput[] = [
	{
		name: "Project 1",
		description: "This is the first project",
		startDate: new Date("2023-01-01"),
		deliveryDate: new Date("2023-06-01"),
		status: "IN_PROGRESS",
	},
]

export async function main() {
	for (const p of projectData) {
		await prisma.project.create({
			data:p,
		})
	}
}

main()