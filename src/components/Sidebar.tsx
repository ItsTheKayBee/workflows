import { useContext, type DragEventHandler } from 'react'
import { DnDContext } from '../context/DnDContextProvider'
import { DataContext } from '../context/DataContextProvider'
import { FlowType, getData } from '../data'

const DummyNode = ({
	label,
	description,
	className,
	onDragStart,
	isDisabled = false
}: {
	label: string
	description: string
	className: string
	onDragStart: DragEventHandler
	isDisabled?: boolean
}) => {
	return (
		<div
			className={`border-2 rounded-md p-2 mb-2 cursor-move ${className} ${
				isDisabled ? 'opacity-50 cursor-not-allowed' : ''
			}`}
			draggable={!isDisabled}
			onDragStart={onDragStart}
		>
			<div className='font-medium'>{label}</div>
			<div className='text-sm text-gray-600'>{description}</div>
		</div>
	)
}

const allNodes = [
	{
		label: 'Start Node',
		description: 'The starting point of the flow',
		type: 'start',
		className: 'border-default-400'
	},
	{
		label: 'Action Node',
		description: 'For performing actions',
		type: 'action',
		className: 'border-blue-400'
	},
	{
		label: 'Decision Node',
		description: 'For taking decisions',
		type: 'decision',
		className: 'border-orange-400'
	},
	{
		label: 'Leaf Node',
		description: 'Marks the end of a branch',
		type: 'leaf',
		className: 'border-red-400'
	}
]

const Sidebar = () => {
	const [_, setType] = useContext(DnDContext)
	const { nodes, reset, setNodes, setEdges } = useContext(DataContext)

	const onDragStart = (event: React.DragEvent, nodeType: string) => {
		setType(nodeType)
		event.dataTransfer.effectAllowed = 'move'
	}

	const handleDataChange = async (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const { nodes, edges } = await getData(event.target.value as FlowType)
		setNodes(nodes)
		setEdges(edges)
	}

	return (
		<div className='bg-white flex p-3 min-w-[250px] flex-col justify-between border-l-1'>
			<div className='flex flex-col gap-3'>
				<div>
					<div className='font-medium'>Available Nodes:</div>
					<p className='text-sm text-gray-500'>
						Drag and drop nodes in the canvas.
					</p>
				</div>
				<div>
					{allNodes.map((node, index) => (
						<DummyNode
							key={index}
							{...node}
							onDragStart={event => onDragStart(event, node.type)}
							isDisabled={
								node.type === 'start' && nodes.some(n => n.type === 'start')
							}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-2 mt-2'>
				<div className='font-medium'>Choose dummy data</div>
				<select
					onChange={handleDataChange}
					className='border rounded-md p-2 mb-4'
				>
					<option value=''>Select dummy data</option>
					<option value='simple'>Simple</option>
					<option value='complex'>Complex</option>
				</select>

				<button
					className='border border-stone-900 rounded-md p-1'
					onClick={() => {
						reset()
					}}
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Sidebar
