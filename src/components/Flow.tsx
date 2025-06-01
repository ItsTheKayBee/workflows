import { ReactFlow, Controls, Background } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useContext } from 'react'
import { DataContext } from '../context'

function Flow() {
  const {nodes, edges} = useContext(DataContext)

	return (
		<div className='w-full h-screen'>
			<ReactFlow nodes={nodes} edges={edges} fitView>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	)
}

export default Flow
