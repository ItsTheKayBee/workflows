const BaseNode = ({
	className,
	children,
	focused = false,
}: {
	className?: string
	children: React.ReactNode
	focused?: boolean
}) => {
	return (
		<div
			className={`rounded-md min-w-20 p-2 border-1 text-xs ${className} ${focused ? 'bg-blue-200 text-blue-500' : 'bg-white text-black'}`}
		>
			{children}
		</div>
	)
}

export default BaseNode
