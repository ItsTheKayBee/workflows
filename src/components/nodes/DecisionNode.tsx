import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

type Condition = {
	leftHand: string
	operator: string
	rightHand: string
}

type Logic = 'AND' | 'OR'

type ConditionGroup = {
	logic: Logic
	conditions: (Condition | ConditionGroup)[]
}

export type DecisionNode = Node<
	{
		label: string
		condition: Condition | ConditionGroup
		truePathLabel?: string
		falsePathLabel?: string
	},
	'decision'
>

const DecisionNode = ({ data }: NodeProps<DecisionNode>) => {
	return (
		<BaseNode className='border-orange-400'>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
			<Handle
				type='source'
				position={Position.Bottom}
				id='TRUTHY'
				className='!bg-green-500 !left-[30%]'
			/>
			<Handle
				type='source'
				position={Position.Bottom}
				id='FALSY'
				className='!bg-red-500 !left-[70%]'
			/>
		</BaseNode>
	)
}

export default DecisionNode
