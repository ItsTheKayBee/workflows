import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

export type Condition = {
	leftHand: string
	operator: string
	rightHand: string
}

export type DecisionNode = Node<
	{
		label: string
		focused?: boolean
	},
	'decision'
>

const DecisionNode = ({ data }: NodeProps<DecisionNode>) => {
	return (
		<BaseNode className='border-orange-400' focused={data.focused}>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</BaseNode>
	)
}

export default DecisionNode
