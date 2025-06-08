import {
	BaseEdge,
	EdgeLabelRenderer,
	getSimpleBezierPath,
	type Edge,
	type EdgeProps
} from '@xyflow/react'
import type { Condition } from '../nodes/DecisionNode'

export type DecisionEdge = Edge<
	{
		condition: Condition
	},
	'decision'
>

const DecisionEdge = ({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	label
}: EdgeProps<DecisionEdge>) => {
	const [path, labelX, labelY] = getSimpleBezierPath({
		sourceX,
		sourceY,
		targetX,
		targetY
	})

	return (
		<>
			<BaseEdge path={path} id={id} />
			<EdgeLabelRenderer>
				{label && <div
					style={{
						position: 'absolute',
						transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
						background: '#fff',
						padding: '2px 6px',
						borderRadius: '4px',
						fontSize: '12px',
					}}
					className='nodrag nopan'
				>
					{label}
				</div>}
			</EdgeLabelRenderer>
		</>
	)
}

export default DecisionEdge
