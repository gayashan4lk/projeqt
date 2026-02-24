import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/types/projectSchema'

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="w-60">
			<CardHeader>
				<CardTitle>{project.name}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<span>Start: {project.startDate?.toLocaleDateString('en-GB')}</span>
				<br />
				<span>Delivery: {project.deliveryDate?.toLocaleDateString('en-GB')}</span>
			</CardContent>
			<CardFooter>
				<span>{project.status}</span>
			</CardFooter>
		</Card>
	)
}
