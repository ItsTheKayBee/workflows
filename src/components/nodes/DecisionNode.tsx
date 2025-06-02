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
		condition: Condition
		truePathLabel?: string
		falsePathLabel?: string
		focused?: boolean
	},
	'decision'
>

const DecisionNode = ({ data }: NodeProps<DecisionNode>) => {
	return (
		<BaseNode className='border-orange-400' focused={data.focused}>
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
