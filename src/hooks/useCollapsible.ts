import { useCallback, useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContextProvider'
import type { Node } from '@xyflow/react'

const useCollapsible = () => {
	const [focusedNode, setFocusedNode] = useState<Node | null>(null)

	const { nodes, setNodes, edges, setEdges } = useContext(DataContext)

	const hideNodesAndEdges = useCallback(
		(parentNode: Node | undefined) => {
			if (!parentNode) return

			const outgoingEdges = edges.filter(edge => edge.source === parentNode.id)

			if (outgoingEdges.length === 0) return

			const children: Node[] = []

			outgoingEdges.forEach(edge => {
				const child = nodes.find(
					node =>
						node.id === edge.target &&
						edge.source === parentNode.id &&
						node.id !== focusedNode?.id
				)
				if (child) {
					children.push(child)
				}
			})

			setNodes(node => {
				return node.map(n => {
					if (
						children.find(
							child => child.id === n.id && n.id !== focusedNode?.id
						)
					) {
						return {
							...n,
							hidden: true
						}
					}
					if (n.id === focusedNode?.id) {
						return {
							...n,
							data: {
								...n.data,
								focused: true
							}
						}
					}
					return n
				})
			})

			setEdges(edge => {
				return edge.map(e => {
					if (
						outgoingEdges.find(
							outgoingEdge =>
								outgoingEdge.id === e.id && e.target !== focusedNode?.id
						)
					) {
						return {
							...e,
							hidden: true
						}
					}
					return e
				})
			})

			children.forEach(child => {
				hideNodesAndEdges(child)
			})
		},
		[edges, nodes, setEdges, setNodes, focusedNode?.id]
	)

  const resetFocus = useCallback(() => {
		setNodes(nodes =>
			nodes.map(node => ({
				...node,
				hidden: false,
				data: { ...node.data, focused: false }
			}))
		)
		setEdges(edges => edges.map(edge => ({ ...edge, hidden: false })))
	}, [setEdges, setNodes])

	useEffect(() => {
		if (focusedNode) {
			const incomingEdge = edges.find(edge => edge.target === focusedNode.id)

			const parentNode = nodes.find(node => node.id === incomingEdge?.source)

			hideNodesAndEdges(parentNode)
		} else {
			resetFocus()
		}
	}, [focusedNode])

	return {
		focusedNode,
		setFocusedNode,
    resetFocus
	}
}

export default useCollapsible
