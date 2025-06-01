import { Handle, Position, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

const StartNode = ({ data }: NodeProps) => {
  return (
		<BaseNode className="border-green-400">
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</BaseNode>
	)
}

export default StartNode
