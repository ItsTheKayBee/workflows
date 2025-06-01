import type { Edge, Node } from '@xyflow/react'
import { createContext } from 'react'

type DataType = {
	nodes: Node[]
	edges: Edge[]
	setNodes: (nodes: Node[]) => void
	setEdges: (edges: Edge[]) => void
}

export const DataContext = createContext<DataType>({
	nodes: [],
	edges: [],
	setNodes: () => {},
	setEdges: () => {}
})
