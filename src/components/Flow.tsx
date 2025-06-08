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
	useReactFlow,
	type Node,
	type NodeMouseHandler,
	Panel,
	type Edge,
	type EdgeMouseHandler
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback, useContext, useState, type DragEventHandler } from 'react'
import DecisionNode from './nodes/DecisionNode'
import ActionNode from './nodes/ActionNode'
import StartNode from './nodes/StartNode'
import LeafNode from './nodes/LeafNode'
import { DataContext } from '../context/DataContextProvider'
import { DnDContext } from '../context/DnDContextProvider'
import Drawer from './Drawer'
import useCollapsible from '../hooks/useCollapsible'
import DecisionEdge from './edges/DecisionEdge'

const nodeTypes = {
	decision: DecisionNode,
	action: ActionNode,
	start: StartNode,
	leaf: LeafNode
}

const edgeTypes = {
	decision: DecisionEdge
}

function Flow() {
	const [selectedNode, setSelectedNode] = useState<Node | null>(null)
	const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null)
	const [editMode, setEditMode] = useState<boolean>(false)

	const { focusedNode, setFocusedNode, resetFocus } = useCollapsible()

	const { nodes, edges, setNodes, setEdges } = useContext(DataContext)
	const [type] = useContext(DnDContext)
	const { screenToFlowPosition } = useReactFlow()

	const onNodesChange: OnNodesChange = useCallback(
		changes => setNodes(nds => applyNodeChanges(changes, nds)),
		[setNodes]
	)

	const onEdgesChange: OnEdgesChange = useCallback(
		changes => setEdges(eds => applyEdgeChanges(changes, eds)),
		[setEdges]
	)

	const onConnect: OnConnect = useCallback(
		connection => {
			const isDecisionEdge =
				nodes.find(n => n.id === connection.source)?.type === 'decision'
			setEdges(eds =>
				addEdge(
					{
						...connection,
						type: isDecisionEdge ? 'decision' : 'default'
					},
					eds
				)
			)
		},
		[nodes, setEdges]
	)

	const onDragOver: DragEventHandler = useCallback(event => {
		event.preventDefault()
		if (event.dataTransfer) event.dataTransfer.dropEffect = 'move'
	}, [])

	const onDrop: DragEventHandler = useCallback(
		event => {
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
				data: {
					label: `${type} node ${nodes.length + 1}`
				}
			}

			setNodes(nds => nds.concat(newNode))
		},
		[nodes.length, screenToFlowPosition, type, setNodes]
	)

	const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
		setSelectedEdge(null)
		setSelectedNode(node)
	}, [])

	const toggleMode = () => setEditMode(prev => !prev)

	const onNodeChange = (node: Node) => {
		setNodes(nds => nds.map(n => (n.id === node.id ? { ...n, ...node } : n)))
		if (selectedNode && selectedNode.id === node.id) {
			setSelectedNode(node)
		}
	}

	const onNodeDoubleClick: NodeMouseHandler = useCallback(
		(_, node) => {
			if (node.type === 'start') return

			if (focusedNode?.id) {
				if (focusedNode.id === node.id) {
					setFocusedNode(null)
				} else {
					resetFocus()
					setFocusedNode(node)
				}
			} else {
				setFocusedNode(node)
			}
		},
		[setFocusedNode, focusedNode?.id]
	)

	const onEdgeClick: EdgeMouseHandler = useCallback((_, edge) => {
		setSelectedNode(null)
		setSelectedEdge(edge)
	}, [])

	const onEdgeChange = (edge: Edge) => {
		setEdges(eds => eds.map(e => (e.id === edge.id ? { ...e, ...edge } : e)))
		if (selectedEdge && selectedEdge.id === edge.id) {
			setSelectedEdge(edge)
		}
	}

	return (
		<div className='w-full h-screen'>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				fitView
				snapToGrid
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onDragOver={onDragOver}
				onDrop={onDrop}
				onNodeClick={onNodeClick}
				onEdgeClick={onEdgeClick}
				onNodeDoubleClick={onNodeDoubleClick}
			>
				<Background />
				<Controls />
				<Panel>
					<button
						className='px-3 py-1.5 bg-white rounded-lg shadow-md cursor-pointer'
						onClick={toggleMode}
					>
						{editMode ? 'View' : 'Edit'}
					</button>
				</Panel>
			</ReactFlow>
			{(selectedNode || selectedEdge) && (
				<Drawer
					node={selectedNode}
					edge={selectedEdge}
					onClose={() => {
						setSelectedNode(null)
						setSelectedEdge(null)
					}}
					editMode={editMode}
					onNodeChange={onNodeChange}
					onEdgeChange={onEdgeChange}
				/>
			)}
		</div>
	)
}

export default Flow
