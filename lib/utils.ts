import { ProjectStatus } from '@/types/projectSchema'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getStatusLabel(status: ProjectStatus) {
	switch (status) {
		case 'NOT_STARTED':
			return 'Not Started'
		case 'ON_TRACK':
			return 'On Track'
		case 'OFF_TRACK':
			return 'Off Track'
		case 'ON_HOLD':
			return 'On Hold'
		case 'COMPLETED':
			return 'Completed'
		default:
			return 'Unknown'
	}
}
