import {
	ReactFlow,
	Controls,
	Background,
	applyEdgeChanges,
	applyNodeChanges,
	addEdge,
	type OnEdgesChange,
	type OnNodesChange,
	type OnConnect,
	useReactFlow
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback, useContext, type DragEventHandler } from 'react'
import DecisionNode from './nodes/DecisionNode'
import ActionNode from './nodes/ActionNode'
import StartNode from './nodes/StartNode'
import LeafNode from './nodes/LeafNode'
import { DataContext } from '../context/DataContextProvider'
import { DnDContext } from '../context/DnDContextProvider'

const nodeTypes = {
	decision: DecisionNode,
	action: ActionNode,
	start: StartNode,
	leaf: LeafNode
}

function Flow() {
	const { nodes, edges, setNodes, setEdges } = useContext(DataContext)
	const [type] = useContext(DnDContext)
	const { screenToFlowPosition } = useReactFlow()

	const onNodesChange: OnNodesChange = useCallback(
		changes => setNodes((nds: any[]) => applyNodeChanges(changes, nds)),
		[setNodes]
	)
	const onEdgesChange: OnEdgesChange = useCallback(
		changes => setEdges(eds => applyEdgeChanges(changes, eds)),
		[setEdges]
	)
	const onConnect: OnConnect = useCallback(
		connection => setEdges(eds => addEdge(connection, eds)),
		[setEdges]
	)

	const onDragOver: DragEventHandler = useCallback((event) => {
		event.preventDefault()
		if (event.dataTransfer) event.dataTransfer.dropEffect = 'move'
	}, [])

	const onDrop: DragEventHandler = useCallback(
		(event) => {
			event.preventDefault()

			if (!type) return

			const position = screenToFlowPosition({
				x: event.clientX,
				y: event.clientY
			})
			const newNode = {
				id: `${nodes.length + 1}`,
				type,
				position,
				data: { label: `${type} node` }
			}

			setNodes(nds => nds.concat(newNode))
		},
		[nodes.length, screenToFlowPosition, type]
	)

	return (
		<div className='w-full h-screen'>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				fitView
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onDragOver={onDragOver}
				onDrop={onDrop}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	)
}

export default Flow
