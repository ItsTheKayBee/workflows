import { Handle, Position, type NodeProps } from '@xyflow/react'

const ActionNode = ({ data }: NodeProps) => {
	return (
		<>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</>
	)
}

export default ActionNode
