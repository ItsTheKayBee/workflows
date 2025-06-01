import {
	ReactFlow,
	Controls,
	Background,
	applyEdgeChanges,
	applyNodeChanges,
	addEdge,
	type OnEdgesChange,
	type OnNodesChange,
	type OnConnect
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback, useContext } from 'react'
import { DataContext } from '../context'
import DecisionNode from './nodes/DecisionNode'
import ActionNode from './nodes/ActionNode'
import StartNode from './nodes/StartNode'
import LeafNode from './nodes/LeafNode'

const nodeTypes = {
  decision: DecisionNode,
  action: ActionNode,
  start: StartNode,
  leaf: LeafNode
}

function Flow() {
	const { nodes, edges, setNodes, setEdges } = useContext(DataContext)

	const onNodesChange: OnNodesChange = useCallback(
		changes => setNodes(nds => applyNodeChanges(changes, nds)),
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

	return (
		<div className='w-full h-screen'>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				fitView
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
        nodeTypes={nodeTypes}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	)
}

export default Flow
