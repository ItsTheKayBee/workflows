import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

export type LeafNode = Node<{
	label: string
	type: 'success' | 'failure'
	focused?: boolean
}, 'leaf'>

const LeafNode = ({ data }: NodeProps<LeafNode>) => {
  return (
		<BaseNode
			className={`${data.type === 'success' ? 'border-green-400' : 'border-red-400'}`}
			focused={data.focused}
		>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
		</BaseNode>
	)
}

export default LeafNode
