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
			x: 256.4779730534566,
			y: 183.39060621220295
		},
		data: {
			label: 'Action'
		},
		type: 'action',
		selected: false,
		dragging: false
	},
	{
		id: '5',
		type: 'action',
		position: {
			x: -11.618889551767488,
			y: 279.613861395777
		},
		data: {
			label: 'action node 5'
		},
		selected: false,
		dragging: false
	},
	{
		id: '6',
		type: 'action',
		position: {
			x: 253.06695483618904,
			y: 276.0853526884513
		},
		data: {
			label: 'action node 6'
		},
		selected: false,
		dragging: false
	},
	{
		id: '7',
		type: 'action',
		position: {
			x: 624.4343851398951,
			y: 271.6985624735572
		},
		data: {
			label: 'action node 7'
		},
		selected: false,
		dragging: false
	},
	{
		id: '8',
		type: 'action',
		position: {
			x: -185.38663401671556,
			y: 356.33121795394635
		},
		data: {
			label: 'action node 8'
		},
		selected: false,
		dragging: false
	},
	{
		id: '9',
		type: 'action',
		position: {
			x: -68.52471118058122,
			y: 356.8860978714938
		},
		data: {
			label: 'action node 9'
		},
		selected: false,
		dragging: false
	},
	{
		id: '10',
		type: 'action',
		position: {
			x: 35.36636294561069,
			y: 356.87746217433664
		},
		data: {
			label: 'action node 10'
		},
		selected: false,
		dragging: false
	},
	{
		id: '11',
		type: 'action',
		position: {
			x: 159.72785067527207,
			y: 356.63004764005797
		},
		data: {
			label: 'action node 11'
		},
		selected: false,
		dragging: false
	},
	{
		id: '12',
		type: 'action',
		position: {
			x: 272.49689270821005,
			y: 356.6300476400581
		},
		data: {
			label: 'action node 12'
		},
		selected: false,
		dragging: false
	},
	{
		id: '13',
		type: 'action',
		position: {
			x: 385.265934741148,
			y: 354.0075117788269
		},
		data: {
			label: 'action node 13'
		},
		selected: false,
		dragging: false
	},
	{
		id: '14',
		type: 'action',
		position: {
			x: 516.3927278027038,
			y: 355.75586901964766
		},
		data: {
			label: 'action node 14'
		},
		selected: false,
		dragging: false
	},
	{
		id: '15',
		type: 'action',
		position: {
			x: 634.406841558104,
			y: 352.2591545380061
		},
		data: {
			label: 'action node 15'
		},
		selected: false,
		dragging: false
	},
	{
		id: '16',
		type: 'action',
		position: {
			x: 756.7918484155562,
			y: 349.636618676775
		},
		data: {
			label: 'action node 16'
		},
		selected: false,
		dragging: false
	},
	{
		id: '17',
		type: 'leaf',
		position: {
			x: -179.96616058398723,
			y: 441.020156498447
		},
		data: {
			label: 'leaf node 17'
		},
		selected: true,
		dragging: false
	},
	{
		id: '18',
		type: 'leaf',
		position: {
			x: -13.058171326886743,
			y: 444.86000713681113
		},
		data: {
			label: 'leaf node 18'
		}
	},
	{
		id: '19',
		type: 'leaf',
		position: {
			x: 169.20636904838486,
			y: 439.67445203739504
		},
		data: {
			label: 'leaf node 19'
		},
		selected: false,
		dragging: false
	},
	{
		id: '20',
		type: 'leaf',
		position: {
			x: 304.46476872509254,
			y: 447.7776610307859
		},
		data: {
			label: 'leaf node 20'
		},
		selected: false,
		dragging: false
	},
	{
		id: '21',
		type: 'leaf',
		position: {
			x: 439.4145957722118,
			y: 439.91529218070707
		},
		data: {
			label: 'leaf node 21'
		},
		selected: false,
		dragging: false
	},
	{
		id: '22',
		type: 'leaf',
		position: {
			x: 567.2521465734189,
			y: 438.98705666437866
		},
		data: {
			label: 'leaf node 22'
		},
		selected: false,
		dragging: false
	},
	{
		id: '23',
		type: 'leaf',
		position: {
			x: 691.9312033373391,
			y: 441.56353049940833
		},
		data: {
			label: 'leaf node 23'
		},
		selected: false,
		dragging: false
	},
	{
		id: '24',
		type: 'leaf',
		position: {
			x: 802.9477085201504,
			y: 429.37610957996543
		},
		data: {
			label: 'leaf node 24'
		},
		selected: false,
		dragging: false
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
		sourceHandle: 'TRUTHY'
	},
	{
		id: '2-4',
		source: '2',
		target: '4',
		sourceHandle: 'FALSY'
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
		target: '18',
		id: 'xy-edge__10-18'
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