import axios from './axios'

export interface IItem {
    name: string
    lvl: number
    img: string
    rarity: 'common' | 'rare' | 'heroic' | 'legendary',
    monster: String
} 

export const getAllItems = async () => {
    const result = await axios.get<IItem[]>('/items')
    console.log(result.data)
    return result.data
}
