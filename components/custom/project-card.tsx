import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProjectCard({name, description, startDate, deliveryDate, status}: {name: string, description: string, startDate?: Date, deliveryDate?: Date, status?: string}) {
	return (
		<Card className="h-52 w-60">
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<span>Start: {startDate?.toLocaleDateString('en-GB')}</span>
				<br />
				<span>Delivery: {deliveryDate?.toLocaleDateString('en-GB')}</span>
			</CardContent>
			<CardFooter>
				<span>{status}</span>
			</CardFooter>
		</Card>
	)
}
