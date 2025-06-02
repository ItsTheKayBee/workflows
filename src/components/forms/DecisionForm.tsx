import type { Condition, DecisionNode } from '../nodes/DecisionNode'

const properties = [
	{
		key: 'age',
		label: 'Age',
		type: 'number'
	},
	{
		key: 'income',
		label: 'Income',
		type: 'number'
	},
	{
		key: 'location',
		label: 'Location',
		type: 'string'
	},
	{
		key: 'name',
		label: 'Name',
		type: 'string'
	}
]

const operators = [
	{
		key: 'equals',
		label: '=',
		type: 'number'
	},
	{
		key: 'greaterThan',
		label: '>',
		type: 'number'
	},
	{
		key: 'lessThan',
		label: '<',
		type: 'number'
	},
	{
		key: 'contains',
		label: 'Contains',
		type: 'string'
	}
]

const Condition = ({
	condition,
	onConditionChange
}: {
	condition: Condition
	onConditionChange: (condition: Condition) => void
}) => {
	if (!condition) return null

	return (
		<div className='flex flex-col space-y-2'>
			<label>Condition</label>
			<div className='flex flex-col space-y-2'>
				<select
					className='border rounded-md p-2 w-full'
					value={condition.leftHand}
					onChange={e =>
						onConditionChange({
							...condition,
							leftHand: e.target.value,
							rightHand: ''
						})
					}
				>
					<option value=''>Select property</option>
					{properties.map(prop => (
						<option key={prop.key} value={prop.key}>
							{prop.label}
						</option>
					))}
				</select>
				{condition?.leftHand && (
					<select
						className='border rounded-md p-2 w-full'
						value={condition.operator}
						onChange={e =>
							onConditionChange({
								...condition,
								operator: e.target.value
							})
						}
					>
						<option value=''>Select operator</option>
						{operators
							.filter(
								op =>
									op.type ===
									properties.find(prop => prop.key === condition.leftHand)?.type
							)
							.map(op => (
								<option key={op.key} value={op.key}>
									{op.label}
								</option>
							))}
					</select>
				)}
				{condition?.leftHand && condition?.operator && (
					<input
						type='text'
						className='border rounded-md p-2 w-full'
						placeholder='Value'
						value={condition.rightHand}
						onChange={e =>
							onConditionChange({ ...condition, rightHand: e.target.value })
						}
					/>
				)}
			</div>
		</div>
	)
}

const DecisionForm = ({
	node,
	onNodeChange
}: {
	node: DecisionNode | undefined
	onNodeChange: (node: DecisionNode) => void
}) => {
	if (!node) return null

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		key: string
	) => {
		const { value } = e.target
		const updatedNode = {
			...node,
			data: {
				...node.data,
				[key]: value
			}
		}
		onNodeChange(updatedNode)
	}

	const handleConditionChange = (condition: Condition) => {
		console.log(condition)
		const updatedNode = {
			...node,
			data: {
				...node.data,
				condition
			}
		}
		onNodeChange(updatedNode as DecisionNode)
	}

	return (
		<>
			<Condition
				condition={
					node.data.condition || { leftHand: '', operator: '', rightHand: '' }
				}
				onConditionChange={handleConditionChange}
			/>
			<div className='flex flex-col space-y-1'>
				<label>True path label</label>
				<input
					type='text'
					value={node.data.truePathLabel || ''}
					className='border rounded-md p-2'
					onChange={e => handleChange(e, 'truePathLabel')}
				/>
			</div>
			<div className='flex flex-col space-y-1'>
				<label>False path label</label>
				<input
					type='text'
					value={node.data.falsePathLabel || ''}
					className='border rounded-md p-2'
					onChange={e => handleChange(e, 'falsePathLabel')}
				/>
			</div>
		</>
	)
}

export default DecisionForm
