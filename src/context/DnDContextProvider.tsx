import { useState, createContext, type SetStateAction, type Dispatch } from 'react'

export const DnDContext = createContext<[string | null, Dispatch<SetStateAction<string | null>>]>([null, (_: any) => {}])

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
	const [type, setType] = useState<string | null>(null)

	return (
		<DnDContext.Provider value={[type, setType]}>
			{children}
		</DnDContext.Provider>
	)
}
