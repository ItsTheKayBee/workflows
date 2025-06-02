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
	type Edge
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

const nodeTypes = {
	decision: DecisionNode,
	action: ActionNode,
	start: StartNode,
	leaf: LeafNode
}

function Flow() {
	const [selectedNode, setSelectedNode] = useState<Node | null>(null)
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
		connection => setEdges(eds => addEdge(connection, eds)),
		[setEdges]
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
		setSelectedNode(node)
	}, [])

	const toggleMode = () => setEditMode(prev => !prev)

	const onNodeChange = (node: Node) => {
		setNodes(nds => nds.map(n => (n.id === node.id ? { ...n, ...node } : n)))
		if (selectedNode && selectedNode.id === node.id) {
			setSelectedNode(node)
		}
		if (node.type === 'decision') {
			setEdges(eds =>
				eds.map(edge => {
					if (edge.source === node.id) {
						if (edge.sourceHandle === 'TRUTHY') {
							return { ...edge, label: node.data.truePathLabel || '' } as Edge
						}
						if (edge.sourceHandle === 'FALSY') {
							return { ...edge, label: node.data.falsePathLabel || '' } as Edge
						}
						return edge
					}
					return edge
				})
			)
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

	return (
		<div className='w-full h-screen'>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				fitView
				snapToGrid
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onDragOver={onDragOver}
				onDrop={onDrop}
				onNodeClick={onNodeClick}
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
			{selectedNode && (
				<Drawer
					node={selectedNode}
					onClose={() => setSelectedNode(null)}
					editMode={editMode}
					onNodeChange={onNodeChange}
				/>
			)}
		</div>
	)
}

export default Flow
