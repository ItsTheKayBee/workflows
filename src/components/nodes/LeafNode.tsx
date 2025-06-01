import { Handle, Position, type NodeProps } from '@xyflow/react'

const LeafNode = ({ data }: NodeProps) => {
  return (
		<>
			<Handle type='target' position={Position.Top} id='a' />
			<div>{data.label}</div>
		</>
	)
}

export default LeafNode
