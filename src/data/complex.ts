import type { Edge, Node } from '@xyflow/react'

export const nodes: Node[] = [
	{
		id: '1',
		position: {
			x: 0,
			y: 0
		},
		data: {
			label: 'Start'
		},
		type: 'start'
	},
	{
		id: '2',
		position: {
			x: 0,
			y: 100
		},
		data: {
			label: 'Decision'
		},
		type: 'decision'
	},
	{
		id: '3',
		position: {
			x: -100,
			y: 200
		},
		data: {
			label: 'Leaf'
		},
		type: 'leaf'
	},
	{
		id: '4',
		position: {
			x: 206,
			y: 183
		},
		data: {
			label: 'Action'
		},
		type: 'action'
	},
	{
		id: '5',
		type: 'action',
		position: {
			x: -11,
			y: 279
		},
		data: {
			label: 'action node 5'
		}
	},
	{
		id: '6',
		type: 'action',
		position: {
			x: 253,
			y: 276
		},
		data: {
			label: 'action node 6'
		}
	},
	{
		id: '7',
		type: 'action',
		position: {
			x: 624,
			y: 271
		},
		data: {
			label: 'action node 7'
		}
	},
	{
		id: '8',
		type: 'action',
		position: {
			x: -185,
			y: 356
		},
		data: {
			label: 'action node 8'
		}
	},
	{
		id: '9',
		type: 'action',
		position: {
			x: -68,
			y: 356
		},
		data: {
			label: 'action node 9'
		}
	},
	{
		id: '10',
		type: 'action',
		position: {
			x: 35,
			y: 356
		},
		data: {
			label: 'action node 10'
		}
	},
	{
		id: '11',
		type: 'action',
		position: {
			x: 159,
			y: 356
		},
		data: {
			label: 'action node 11'
		}
	},
	{
		id: '12',
		type: 'action',
		position: {
			x: 272,
			y: 356
		},
		data: {
			label: 'action node 12'
		}
	},
	{
		id: '13',
		type: 'action',
		position: {
			x: 385,
			y: 354
		},
		data: {
			label: 'action node 13'
		}
	},
	{
		id: '14',
		type: 'action',
		position: {
			x: 516,
			y: 355
		},
		data: {
			label: 'action node 14'
		}
	},
	{
		id: '15',
		type: 'action',
		position: {
			x: 634,
			y: 352
		},
		data: {
			label: 'action node 15'
		}
	},
	{
		id: '16',
		type: 'action',
		position: {
			x: 756,
			y: 349
		},
		data: {
			label: 'action node 16'
		}
	},
	{
		id: '26',
		type: 'action',
		position: {
			x: 400,
			y: 183
		},
		data: {
			label: 'action node 26'
		}
	},
	{
		id: '27',
		type: 'action',
		position: {
			x: 520,
			y: 183
		},
		data: {
			label: 'action node 27'
		}
	},
	{
		id: '17',
		type: 'leaf',
		position: {
			x: -179,
			y: 441
		},
		data: {
			label: 'leaf node 17'
		},
		selected: true
	},
	{
		id: '18',
		type: 'leaf',
		position: {
			x: -70,
			y: 444
		},
		data: {
			label: 'leaf node 18'
		}
	},
	{
		id: '19',
		type: 'leaf',
		position: {
			x: 169,
			y: 439
		},
		data: {
			label: 'leaf node 19'
		}
	},
	{
		id: '20',
		type: 'leaf',
		position: {
			x: 304,
			y: 447
		},
		data: {
			label: 'leaf node 20'
		}
	},
	{
		id: '21',
		type: 'leaf',
		position: {
			x: 439,
			y: 439
		},
		data: {
			label: 'leaf node 21'
		}
	},
	{
		id: '22',
		type: 'leaf',
		position: {
			x: 567,
			y: 438
		},
		data: {
			label: 'leaf node 22'
		}
	},
	{
		id: '23',
		type: 'leaf',
		position: {
			x: 691,
			y: 441
		},
		data: {
			label: 'leaf node 23'
		}
	},
	{
		id: '24',
		type: 'leaf',
		position: {
			x: 802,
			y: 429
		},
		data: {
			label: 'leaf node 24'
		}
	},
	{
		id: '25',
		type: 'leaf',
		position: {
			x: 45,
			y: 441
		},
		data: {
			label: 'leaf node 25'
		}
	}
]

export const edges: Edge[] = [
	{
		id: '1-2',
		source: '1',
		target: '2'
	},
	{
		id: '2-3',
		source: '2',
		target: '3',
		type: 'decision'
	},
	{
		id: '2-4',
		source: '2',
		target: '4',
		type: 'decision'
	},
	{
		id: '2-26',
		source: '2',
		target: '26',
		type: 'decision'
	},
	{
		id: '2-27',
		source: '2',
		target: '27',
		type: 'decision'
	},
	{
		id: '4-5',
		source: '4',
		target: '5'
	},
	{
		id: '4-6',
		source: '4',
		target: '6'
	},
	{
		id: '4-7',
		source: '4',
		target: '7'
	},
	{
		id: '5-8',
		source: '5',
		target: '8'
	},
	{
		id: '5-9',
		source: '5',
		target: '9'
	},
	{
		id: '5-10',
		source: '5',
		target: '10'
	},
	{
		id: '6-11',
		source: '6',
		target: '11'
	},
	{
		id: '6-12',
		source: '6',
		target: '12'
	},
	{
		id: '6-13',
		source: '6',
		target: '13'
	},
	{
		id: '7-14',
		source: '7',
		target: '14'
	},
	{
		id: '7-15',
		source: '7',
		target: '15'
	},
	{
		id: '7-16',
		source: '7',
		target: '16'
	},
	{
		source: '8',
		target: '17',
		id: 'xy-edge__8-17'
	},
	{
		source: '9',
		target: '18',
		id: 'xy-edge__9-18'
	},
	{
		source: '10',
		target: '25',
		id: 'xy-edge__10-25'
	},
	{
		source: '11',
		target: '19',
		id: 'xy-edge__11-19'
	},
	{
		source: '12',
		target: '20',
		id: 'xy-edge__12-20'
	},
	{
		source: '13',
		target: '21',
		id: 'xy-edge__13-21'
	},
	{
		source: '14',
		target: '22',
		id: 'xy-edge__14-22'
	},
	{
		source: '15',
		target: '23',
		id: 'xy-edge__15-23'
	},
	{
		source: '16',
		target: '24',
		id: 'xy-edge__16-24'
	}
]
