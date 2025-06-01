import { Handle, Position, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

const DecisionNode = ({ data }: NodeProps) => {
	return (
		<BaseNode className="border-orange-400">
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
		</BaseNode>
	)
}

export default DecisionNode
