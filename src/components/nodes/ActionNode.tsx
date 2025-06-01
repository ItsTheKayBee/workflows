import { Handle, Position, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

const ActionNode = ({ data }: NodeProps) => {
	return (
		<BaseNode className="border-blue-400">
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</BaseNode>
	)
}

export default ActionNode
