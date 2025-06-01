import type { Edge, Node } from '@xyflow/react'
import { useEffect, useState } from 'react'
import { DataContext } from '.'
import { FlowType, getData } from '../data'

export const DataContextProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [nodes, setNodes] = useState<Node[]>([])
	const [edges, setEdges] = useState<Edge[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await getData(FlowType.simple)
			setNodes(data.nodes)
			setEdges(data.edges)
		}
		fetchData()
	}, [])

	return (
		<DataContext.Provider value={{ nodes, edges, setNodes, setEdges }}>
			{children}
		</DataContext.Provider>
	)
}
