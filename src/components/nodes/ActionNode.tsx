import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

export type ActionNode = Node<
	{
		label: string
		actionType: string
		collapsed?: boolean
		summary?: string
		extra?: {
			[key: string]: any
		}
	},
	'action'
>

const ActionNode = ({ data }: NodeProps<ActionNode>) => {
	return (
		<BaseNode
			className='border-blue-400'
			collapsed={data.collapsed}
			summary={data.summary}
		>
			<Handle type='target' position={Position.Top} />
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</BaseNode>
	)
}

export default ActionNode
