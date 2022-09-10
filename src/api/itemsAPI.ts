import axios, { axiosPrivate } from './axios'

export interface IItem {
    name: string
    lvl: number
    img: string
    rarity: 'common' | 'rare' | 'heroic' | 'legendary',
    monster: string
    _id?: string
} 

export const getAllItems = async () => {
    const result = await axios.get<IItem[]>('/items')
    return result.data
}

export const createItem = async (item: IItem) => {
    const result = await axiosPrivate.post('/items', item)
    return result.data
}

export const editItem = async (item: IItem, _id: string) => {
    const result = await axiosPrivate.post(`/items/item?_id=${ _id }`, item)
    return result.data
}
