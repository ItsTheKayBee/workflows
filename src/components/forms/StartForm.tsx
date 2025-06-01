import type { StartNode } from "../nodes/StartNode"

const StartForm = ({
  node,
  onNodeChange
}: {
  node: StartNode | undefined
  onNodeChange: (node: StartNode) => void
}) => { 
  if (!node) return null

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        triggerType: value
      }
    }
    onNodeChange(updatedNode as StartNode)
  }

  return (
   <>
    <div className="flex flex-col gap-1">
      <label>Trigger type</label>
      <select
        value={node.data.triggerType}
        onChange={handleChange}
        className="border rounded-md p-2"
      >
        <option value="">Select</option>
        <option value="manual">Manual</option>
        <option value="webhook">Webhook</option>
      </select>
    </div>
   </>
  )
}

export default StartForm