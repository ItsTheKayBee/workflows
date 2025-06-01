export enum FlowType {
	simple = 'simple',
	complex = 'complex'
}

export const getData = async (type: FlowType) => import(`./${type}`)
