import type { LeafNode } from "../nodes/LeafNode"

const LeafForm = ({
  node,
  onNodeChange
}: {
  node: LeafNode | undefined
  onNodeChange: (node: LeafNode) => void
}) => { 
  if (!node) return null

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        type: value
      }
    }
    onNodeChange(updatedNode as LeafNode)
  }

  return (
    <div className='flex flex-col space-y-3'>
      <div className='flex flex-col space-y-1'>
        <label>Type</label>
        <select value={node.data.type} onChange={handleChange} className='border rounded-md p-2'>
          <option value="">Select</option>
          <option value="success">Success</option>
          <option value="failure">Failure</option>
        </select>
      </div>
    </div>
  )
}

export default LeafForm