const BaseNode = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<div
			className={`bg-white rounded-lg min-w-20 p-2 border-1 text-xs ${className}`}
		>
			{children}
		</div>
	)
}

export default BaseNode
