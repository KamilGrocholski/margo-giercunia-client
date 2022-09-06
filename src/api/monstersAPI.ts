import axios from './axios'
import { IItem } from './itemsAPI'

export interface IMonster {
    name: string
    lvl: number
    img: string
    type: 'T' | 'K'
    items: IItem[]
}

export const getAllMonsters = async () => {
    const result = await axios.get<IMonster[]>('/monsters')
    console.log(result.data)
    return result.data
}