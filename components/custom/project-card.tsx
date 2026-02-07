import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProjectCard({name, description, startDate, deliveryDate, status}: {name: string, description: string, startDate?: Date, deliveryDate?: Date, status?: string}) {
	return (
		<Card className="m-2 max-w-xs">
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<span>Start: {startDate?.toDateString()}</span>
				<br />
				<span>Delivery: {deliveryDate?.toDateString()}</span>
			</CardContent>
			<CardFooter>
				<span>{status}</span>
			</CardFooter>
		</Card>
	)
}
