export function ProjectCardSkeleton() {
	return (
		<div className="border rounded-md p-4 mb-4 animate-pulse">
			<div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
			<div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
			<div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
			<div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
			<div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
		</div>
	)
}