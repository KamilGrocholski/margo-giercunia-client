import create from 'zustand'
import { IItem } from '../api/itemsAPI'
import { IMonster } from '../api/monstersAPI'

interface IAdminPanel {
    window: 'monstersCreation' | 'monstersEditing'
    setWindow: (window: 'monstersCreation' | 'monstersEditing') => void
    itemsWindow: 'itemsCreation' | 'itemsEditing'
    setItemsWindow: (window: 'itemsCreation' | 'itemsEditing') => void
    monster?: IMonster
    setMonster: (monster: IMonster) => void
    item?: IItem
    setItem: (item: IItem) => void
    isOpenModal: boolean
    setIsOpenModal: (bool: boolean) => void
}

const useAdminPanel = create<IAdminPanel>(set => ({
    window: 'monstersCreation',
    setWindow: (window) => set(state => ({ window })),
    itemsWindow: 'itemsCreation',
    setItemsWindow: (window) => set(state => ({ itemsWindow: window })),
    monster: undefined,
    setMonster: (monster) => set(state => ({ monster })),
    item: undefined,
    setItem: (item) => set(state => ({ item })),
    isOpenModal: false,
    setIsOpenModal: (bool) => set(state => ({ isOpenModal: bool }))
}))

export default useAdminPanel