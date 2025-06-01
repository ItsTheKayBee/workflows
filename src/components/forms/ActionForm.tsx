import type { ActionNode } from '../nodes/ActionNode'

const actionsList = [
	{ label: 'Send Email', actionType: 'email' },
	{ label: 'Send Notification', actionType: 'notification' },
	{ label: 'Log Event', actionType: 'log' },
	{ label: 'Call users', actionType: 'call' }
]

const ActionForm = ({
	node,
	onNodeChange
}: {
	node: ActionNode | undefined
	onNodeChange: (node: ActionNode) => void
}) => {
	if (!node) return null

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		const updatedNode = {
			...node,
			data: {
				...node.data,
				actionType: value
			}
		}
		onNodeChange(updatedNode)
	}

	return (
		<div className='flex flex-col space-y-3'>
			<div className='flex flex-col space-y-1'>
				<label>Action</label>
				<select
					value={node.data.actionType}
					onChange={handleChange}
					className='border rounded-md p-2'
				>
          <option value=''>Select</option>
					{actionsList.map(action => (
						<option key={action.actionType} value={action.actionType}>
							{action.label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default ActionForm
