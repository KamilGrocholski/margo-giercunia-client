import axios, { axiosPrivate } from './axios'

export interface IItem {
    name: string
    lvl: number
    img: string
    rarity: 'common' | 'rare' | 'heroic' | 'legendary',
    monster: string
} 

export const getAllItems = async () => {
    const result = await axios.get<IItem[]>('/items')
    console.log(result.data)
    return result.data
}

export const createItem = async (item: IItem) => {
    const result = await axiosPrivate.post('/items', item)
    console.log(result.data)
    return result.data
}
