import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import BaseNode from './BaseNode'

export type StartNode = Node<
	{ label: string; triggerType?: 'manual' | 'webhook'; focused?: boolean },
	'start'
>

const StartNode = ({ data }: NodeProps<StartNode>) => {
	return (
		<BaseNode className='border-default-400' focused={data.focused}>
			<div>{data.label}</div>
			<Handle type='source' position={Position.Bottom} />
		</BaseNode>
	)
}

export default StartNode
