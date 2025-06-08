import type { Edge, Node } from '@xyflow/react'
import BaseForm from './forms/BaseForm'

const Drawer = ({
	node,
	onNodeChange,
	onClose,
	editMode,
	edge,
	onEdgeChange
}: {
	node: Node | null
	onNodeChange: (node: Node) => void
	onClose: () => void
	editMode: boolean
	edge: Edge | null
	onEdgeChange: (edge: Edge) => void
}) => {
	if (!node && !edge) return null

	return (
		<div className='absolute right-0 top-0 w-[350px] h-full bg-white p-4 shadow-lg z-10 rounded-2xl'>
			<div className='relative flex items-center justify-between mb-4'>
				<h2 className='text-lg font-semibold'>{node ? 'Node' : 'Edge'} Details</h2>
				<button className='text-2xl cursor-pointer' onClick={onClose}>
					&times;
				</button>
			</div>
			{editMode ? (
				<BaseForm
					node={node}
					edge={edge}
					onNodeChange={onNodeChange}
					onEdgeChange={onEdgeChange}
				/>
			) : (
				<pre className='bg-gray-100 p-2 border border-gray-300 rounded-md'>
					{JSON.stringify(node || edge, null, 2)}
				</pre>
			)}
		</div>
	)
}

export default Drawer
