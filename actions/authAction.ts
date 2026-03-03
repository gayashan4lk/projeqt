'use server'

import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function signIn() {
	await auth.api.signInEmail({
		body: {
			email: 'noon2@email.com',
			password: '1234sdafafa#sfsef',
		},
	})
}

export async function signUp() {
	await auth.api.signUpEmail({
		body: {
			name: 'Noon2 Doe',
			email: 'noon2@email.com',
			password: '1234sdafafa#sfsef',
		},
	})
}

export async function signOut() {
	await auth.api.signOut({
		headers: await headers(),
	})
}
