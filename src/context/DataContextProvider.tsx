import type { Edge, Node } from '@xyflow/react'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { FlowType, getData } from '../data'

import { createContext } from 'react'

type DataType = {
	nodes: Node[]
	edges: Edge[]
	setNodes: Dispatch<SetStateAction<Node[]>>
	setEdges: Dispatch<SetStateAction<Edge[]>>
	reset: () => void
}

export const DataContext = createContext<DataType>({
	nodes: [],
	edges: [],
	setNodes: () => {},
	setEdges: () => {},
	reset: () => {}
})

export const DataContextProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [nodes, setNodes] = useState<Node[]>([])
	const [edges, setEdges] = useState<Edge[]>([])

	const reset = () => {
		setNodes([])
		setEdges([])
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await getData(FlowType.simple)
			setNodes(data.nodes)
			setEdges(data.edges)
		}
		fetchData()
	}, [])

	return (
		<DataContext.Provider value={{ nodes, edges, setNodes, setEdges, reset }}>
			{children}
		</DataContext.Provider>
	)
}
