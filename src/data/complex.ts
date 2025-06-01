import type { Edge, Node } from '@xyflow/react'

export const nodes: Node[] = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		data: { label: 'Start' },
		type: 'start'
	},
	{
		id: '2',
		position: { x: 0, y: 100 },
		data: { label: 'Decision' },
		type: 'decision'
	},
	{
		id: '3',
		position: { x: -100, y: 200 },
		data: { label: 'Leaf' },
		type: 'leaf'
	},
	{
		id: '4',
		position: { x: 100, y: 200 },
		data: { label: 'Action' },
		type: 'action'
	},
	{
		id: '5',
		position: { x: 200, y: 300 },
		data: { label: 'Leaf' },
		type: 'leaf'
	}
]

export const edges: Edge[] = [
	{ id: '1-2', source: '1', target: '2' },
	{ id: '2-3', source: '2', target: '3', sourceHandle: 'yes' },
	{ id: '2-4', source: '2', target: '4', sourceHandle: 'no' },
	{ id: '4-5', source: '4', target: '5' }
]
