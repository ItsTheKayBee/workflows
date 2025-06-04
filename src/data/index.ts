import type { Edge, Node } from '@xyflow/react'

export type FlowType = 'simple' | 'complex';

export const FlowType = {
	simple: 'simple' as FlowType,
	complex: 'complex' as FlowType
};

export const getData = async (
	type: FlowType
): Promise<{ nodes: Node[]; edges: Edge[] }> => import(`./${type}`)
