import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Dashboard() {
	return (
		<div>
			<main>
				<Button variant="default">
					<Link href="/">Go back to landing page</Link>
				</Button>
			</main>
		</div>
	)
}
