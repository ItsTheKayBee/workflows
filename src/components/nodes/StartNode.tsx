import { Handle, Position, type NodeProps } from '@xyflow/react'

const StartNode = ({ data }: NodeProps) => {
  return (
		<>
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</>
	)
}

export default StartNode
