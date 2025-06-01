import type { Edge, Node } from '@xyflow/react'
import { useState } from 'react'
import { DataContext } from '.'

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [nodes, setNodes] = useState<Node[]>([
		{
			id: '1',
			position: { x: 0, y: 0 },
			data: { label: 'Hello' }
		},
		{ id: '2', position: { x: 100, y: 100 }, data: { label: 'World' } }
	])
  const [edges, setEdges] = useState<Edge[]>([
    { id: '1-2', source: '1', target: '2' },
  ])

  return (
    <DataContext.Provider value={{ nodes, edges, setNodes, setEdges }}>
      {children}
    </DataContext.Provider>
  )
}