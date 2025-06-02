import type { Node } from "@xyflow/react"
import ActionForm from "./ActionForm"
import DecisionForm from "./DecisionForm"
import LeafForm from "./LeafForm"
import StartForm from "./StartForm"
import type { ActionNode } from "../nodes/ActionNode"
import type { DecisionNode } from "../nodes/DecisionNode"
import type { LeafNode } from "../nodes/LeafNode"
import type { StartNode } from "../nodes/StartNode"

const BaseForm = ({
	node,
	onNodeChange
}: {
	node: Node | undefined
	onNodeChange: (node: Node) => void
}) => {
	if (!node) return null

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		const updatedNode = {
			...node,
			data: {
				...node.data,
				label: value
			}
		}
		onNodeChange(updatedNode)
	}

	const getNodeForm = () => {
		switch (node.type) {
			case 'action':
				return <ActionForm node={node as ActionNode} onNodeChange={onNodeChange} />
			case 'decision':
				return <DecisionForm node={node as DecisionNode} onNodeChange={onNodeChange} />
			case 'leaf':
				return <LeafForm node={node as LeafNode} onNodeChange={onNodeChange} />
			case 'start':
				return <StartForm node={node as StartNode} onNodeChange={onNodeChange} />
			default:
				return <ActionForm node={node as ActionNode} onNodeChange={onNodeChange} />
		}
	}

	return (
		<div className='flex flex-col space-y-3 overflow-y-auto'>
			<div className='flex flex-col space-y-1'>
				<label>Label</label>
				<input
					type='text'
					value={typeof node.data.label === "string" ? node.data.label : ""}
					className='border rounded-md p-2'
					onChange={e => handleChange(e)}
				/>
			</div>
			{getNodeForm()}
		</div>
	)
}

export default BaseForm