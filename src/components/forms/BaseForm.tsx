import type { Edge, Node } from '@xyflow/react'
import ActionForm from './ActionForm'
import LeafForm from './LeafForm'
import StartForm from './StartForm'
import type { ActionNode } from '../nodes/ActionNode'
import type { LeafNode } from '../nodes/LeafNode'
import type { StartNode } from '../nodes/StartNode'
import DecisionEdgeForm from './DecisionEdgeForm'
import type { DecisionEdge } from '../edges/DecisionEdge'

const BaseForm = ({
	node,
	edge,
	onNodeChange,
	onEdgeChange
}: {
	node: Node | null
	edge?: Edge | null
	onNodeChange: (node: Node) => void
	onEdgeChange: (edge: Edge) => void
}) => {
	if (!node && !edge) return null

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		if (node) {
			const updatedNode = {
				...node,
				data: {
					...node.data,
					label: value
				}
			}
			onNodeChange(updatedNode)
		} 
		if (edge) {
			const updatedEdge = {
				...edge,
				label: value
			}
			onEdgeChange(updatedEdge)
		}
	}

	const getNodeForm = () => {
		if (!node) return null
		switch (node.type) {
			case 'action':
				return (
					<ActionForm node={node as ActionNode} onNodeChange={onNodeChange} />
				)
			case 'decision':
				return null
			case 'leaf':
				return <LeafForm node={node as LeafNode} onNodeChange={onNodeChange} />
			case 'start':
				return (
					<StartForm node={node as StartNode} onNodeChange={onNodeChange} />
				)
			default:
				return (
					<ActionForm node={node as ActionNode} onNodeChange={onNodeChange} />
				)
		}
	}

	const getEdgeForm = () => {
		if (!edge) return null

		switch (edge.type) {
			case 'decision':
				return (
					<DecisionEdgeForm
						edge={edge as DecisionEdge}
						onEdgeChange={onEdgeChange}
					/>
				)
			default:
				return null
		}
	}

	return (
		<div className='flex flex-col space-y-3 overflow-y-auto'>
			<div className='flex flex-col space-y-1'>
				<label>Label</label>
				<input
					type='text'
					value={
						node && typeof node.data.label === 'string'
							? node.data.label
							: edge && typeof edge.label === 'string'
							? edge.label
							: ''
					}
					className='border rounded-md p-2'
					onChange={e => handleChange(e)}
				/>
			</div>
			{node && getNodeForm()}
			{edge && getEdgeForm()}
		</div>
	)
}

export default BaseForm
