import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

export type LeafNode = Node<{
	label: string
	type: 'success' | 'failure'
}, 'leaf'>

const LeafNode = ({ data }: NodeProps<LeafNode>) => {
  return (
		<BaseNode className={`border-${data.type === 'success' ? 'green' : 'red'}-400`}>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
		</BaseNode>
	)
}

export default LeafNode
