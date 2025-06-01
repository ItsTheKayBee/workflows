import './App.css'
import Flow from './components/Flow'
import { DataContextProvider } from './context/DataContextProvider'

function App() {
  return (
    <DataContextProvider>
      <Flow />
    </DataContextProvider>
  )
}

export default App
