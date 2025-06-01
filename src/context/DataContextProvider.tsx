import type { Edge, Node } from '@xyflow/react'
import { useState } from 'react'
import { DataContext } from '.'

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])

  return (
    <DataContext.Provider value={{ nodes, edges, setNodes, setEdges }}>
      {children}
    </DataContext.Provider>
  )
}