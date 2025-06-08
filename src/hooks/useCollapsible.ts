import { useCallback, useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContextProvider'
import type { Edge, Node } from '@xyflow/react'

const useCollapsible = () => {
	const [collapsedNodes, setCollapsedNodes] = useState<Node[] | null>(null)

	const { nodes, setNodes, edges, setEdges } = useContext(DataContext)

	const collapseSubtrees = useCallback((
		parentNode: Node | undefined,
		collapse = true,
		currentNodes = nodes,
		currentEdges = edges
	) => {
		if (!parentNode) return

		const outgoingEdges = currentEdges.filter(
			edge => edge.source === parentNode.id
		)

		if (outgoingEdges.length === 0) return

		const children: Node[] = []

		outgoingEdges.forEach(edge => {
			const child = currentNodes.find(node => node.id === edge.target)
			if (child) {
				children.push(child)
			}
		})

		setNodes(node =>
			node.map(n => {
				if (children.find(child => child.id === n.id)) {
					return {
						...n,
						hidden: collapse
					}
				}
				if (
					n.id === parentNode.id &&
					collapsedNodes?.find(c => c.id === n.id)
				) {
					if (collapse) {
						return {
							...n,
							data: {
								...n.data,
								collapsed: true,
								summary: `${children.length} subtrees`
							}
						}
					}
				}
				return n
			})
		)

		setEdges(edge => {
			return edge.map(e => {
				if (outgoingEdges.find(outgoingEdge => outgoingEdge.id === e.id)) {
					return {
						...e,
						hidden: collapse
					}
				}
				return e
			})
		})

		children.forEach(child => {
			collapseSubtrees(child, collapse, currentNodes, currentEdges)
		})
	}, [collapsedNodes, edges, nodes, setEdges, setNodes])

	const resetCollapse = useCallback(
		(node: Node, currentNodes: Node[], currentEdges: Edge[]) => {
			setNodes(nodes =>
				nodes.map(n => {
					if (n.id === node.id) {
						return {
							...n,
							data: { ...n.data, collapsed: false, summary: undefined }
						}
					}
					return n
				})
			)
			collapseSubtrees(node, false, currentNodes, currentEdges)
		},
		[setEdges, setNodes]
	)

	useEffect(() => {
		if (collapsedNodes) {
			collapsedNodes.forEach(node => {
				if (!node.data.collapsed) {
					collapseSubtrees(node, true)
				}
			})
		}
	}, [collapsedNodes])

	return {
		collapsedNodes,
		setCollapsedNodes,
		resetCollapse
	}
}

export default useCollapsible
