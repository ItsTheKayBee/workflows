import { Handle, Position, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

const LeafNode = ({ data }: NodeProps) => {
  return (
		<BaseNode className="border-red-400">
			<Handle type='target' position={Position.Top} id='a' />
			<div>{data.label}</div>
		</BaseNode>
	)
}

export default LeafNode
