import type { Edge, Node } from '@xyflow/react'

export enum FlowType {
	simple = 'simple',
	complex = 'complex'
}

export const getData = async (
	type: FlowType
): Promise<{ nodes: Node[]; edges: Edge[] }> => import(`./${type}`)
