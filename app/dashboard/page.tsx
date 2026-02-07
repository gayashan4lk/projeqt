import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Dashboard() {
	return (
		<div>
			<main>
				<h1 className="text-4xl">Organization {">"} Projects</h1>
				<Button variant="default">
					<Link href="/">Go back to landing page</Link>
				</Button>
			</main>
		</div>
	)
}
