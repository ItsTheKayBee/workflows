import type { Edge } from '@xyflow/react'
import type { Condition } from '../nodes/DecisionNode'
import type { DecisionEdge } from '../edges/DecisionEdge'

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

const DecisionEdgeForm = ({
	edge,
	onEdgeChange
}: {
	edge: DecisionEdge | null
	onEdgeChange: (edge: Edge) => void
}) => {
	if (!edge) return null

	const handleConditionChange = (condition: Condition) => {
		const updatedEdge = {
			...edge,
			data: {
				...edge.data,
				condition
			}
		}
		onEdgeChange(updatedEdge)
	}

	return (
		<Condition
			condition={
				edge.data?.condition || { leftHand: '', operator: '', rightHand: '' }
			}
			onConditionChange={handleConditionChange}
		/>
	)
}

export default DecisionEdgeForm
