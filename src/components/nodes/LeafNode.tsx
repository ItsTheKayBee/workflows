import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

export type LeafNode = Node<
	{
		label: string
		type: 'success' | 'failure'
		collapsed?: boolean
		summary?: string
	},
	'leaf'
>

const LeafNode = ({ data }: NodeProps<LeafNode>) => {
	return (
		<BaseNode
			className={`${
				data.type === 'success' ? 'border-green-400' : 'border-red-400'
			}`}
			collapsed={data.collapsed}
			summary={data.summary}
		>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
		</BaseNode>
	)
}

export default LeafNode
