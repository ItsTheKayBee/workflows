import { ReactFlowProvider } from '@xyflow/react'
import './App.css'
import Flow from './components/Flow'
import Sidebar from './components/Sidebar'
import { DataContextProvider } from './context/DataContextProvider'
import { DnDProvider } from './context/DnDContextProvider'

function App() {
  return (
		<ReactFlowProvider>
			<DnDProvider>
				<DataContextProvider>
					<div className='flex justify-between w-full'>
						<Flow />
						<Sidebar />
					</div>
				</DataContextProvider>
			</DnDProvider>
		</ReactFlowProvider>
	)
}

export default App
