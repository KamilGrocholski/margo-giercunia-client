import create from 'zustand'
import { IMonster } from '../api/monstersAPI'
import { IItem } from '../api/itemsAPI'

export interface ISimulatorItem extends IItem {
    isOpen: boolean
} 

export interface ISimulatorState {
    currentMonster: IMonster | null
    setCurrentMonster: (monster: IMonster) => void
    isWindowOpen: boolean
    setIsWindowOpen: (bool: boolean) => void
    items: ISimulatorItem[] | null
    setItems: (items: IItem[]) => void
    openItem: (n: number) => void

} 

const useSimulator = create<ISimulatorState>(set => ({
    currentMonster: null,
    setCurrentMonster: (monster) => set(state => ({ currentMonster: monster })),

    isWindowOpen: false,
    setIsWindowOpen: (bool) => set(state => ({ isWindowOpen: bool })),

    items: null,
    setItems: (items) => set(state => ({ items: items.map(item => ({ ...item, isOpen: false })) })),
    openItem: (n) => set(state => ({ items: state.items?.map((item, i)=> ( i === n ? { ...item, isOpen: true } : item )) }))
}))

export default useSimulator