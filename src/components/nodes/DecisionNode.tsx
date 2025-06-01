import { Handle, Position, type NodeProps } from '@xyflow/react'

const DecisionNode = ({ data }: NodeProps) => {
	return (
		<>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} id='yes'
        style={{ left: '30%' }}
      />
			<Handle
				type='source'
				position={Position.Bottom}
				id='no'
				style={{ left: '70%' }}
			/>
		</>
	)
}

export default DecisionNode
