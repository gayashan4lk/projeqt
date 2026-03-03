import { Button } from '@/components/ui/button'
import { signIn, signOut, signUp } from '@/actions/authAction'

export default async function SignUp() {
	return (
		<div>
			<div>
				<h1>Sign Up</h1>
				<form action={signUp}>
					<Button type="submit">SignUp</Button>
				</form>
			</div>
			<div>
				<h1>Login</h1>
				<form action={signIn}>
					<Button type="submit">Login</Button>
				</form>
			</div>
			<div>
				<h1>Logout</h1>
				<form action={signOut}>
					<Button type="submit">Logout</Button>
				</form>
			</div>
		</div>
	)
}
