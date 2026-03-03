import Breadcrumbs from '@/components/custom/shared/breadcrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function Dashboard() {
	const session = await auth.api.getSession({
		headers: await headers(),
	})

	console.log(session)

	return (
		<div>
			<main>
				<Breadcrumbs
					breadcrumbs={[
						{
							label: 'Dashboard',
							href: '/dashboard',
							active: false,
						},
					]}
				/>
				<Button variant="default">
					<Link href="/">Go back to landing page</Link>
				</Button>
			</main>
		</div>
	)
}
