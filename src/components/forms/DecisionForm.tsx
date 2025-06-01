import type { DecisionNode } from "../nodes/DecisionNode"

const DecisionForm = ({
  node,
  onNodeChange
}: {
  node: DecisionNode | undefined
  onNodeChange: (node: DecisionNode) => void
}) => { 
  if (!node) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const { value } = e.target
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        [key]: value
      }
    }
    onNodeChange(updatedNode)
  }

  return (
    <>
      <div>
        <label>Conditions</label>
        <select>
          
        </select>
      </div>
      <div className='flex flex-col space-y-1'>
        <label>True path label</label>
        <input
          type='text'
          value={node.data.truePathLabel || ''}
          className='border rounded-md p-2'
          onChange={e => handleChange(e, 'truePathLabel')}
        />
      </div> 
      <div className='flex flex-col space-y-1'>
        <label>False path label</label>
        <input
          type='text'
          value={node.data.falsePathLabel || ''}
          className='border rounded-md p-2'
          onChange={e => handleChange(e, 'falsePathLabel')}
        />
      </div>
    </>
  )
}

export default DecisionForm