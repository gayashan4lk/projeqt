import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ProjectCardSkeleton() {
	return (
		<Card className="m-2 w-60">
			<CardHeader>
				<CardTitle>
					<Skeleton className="h-6" />
				</CardTitle>
				<CardDescription>
					<Skeleton className="h-4" />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Skeleton className="h-10" />
			</CardContent>
		</Card>
	)
}
