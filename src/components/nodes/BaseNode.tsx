const BaseNode = ({
	className,
	children,
	collapsed = false,
	summary = ''
}: {
	className?: string
	children: React.ReactNode
	collapsed?: boolean
	summary?: string
}) => {
	return (
		<div
			className={`rounded-md min-w-20 p-2 border-1 text-xs ${className} ${
				collapsed ? 'bg-blue-100 text-blue-500' : 'bg-white text-black'
			}`}
		>
			{children}
			<span className="text-[11px]">{collapsed ? summary : ''}</span>
		</div>
	)
}

export default BaseNode
