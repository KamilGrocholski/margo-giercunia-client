import create from 'zustand'

interface IAdminPanel {
    window: 'monsters' | 'items'
    setWindow: (window: 'monsters' | 'items') => void
    monster?: string
    setMonster: (monster: string) => void
}

const useAdminPanel = create<IAdminPanel>(set => ({
    window: 'monsters',
    setWindow: (window) => set(state => ({ window })),
    monster: undefined,
    setMonster: (monster) => set(state => ({ monster }))
}))

export default useAdminPanel