import axios from './axios'
import { IItem } from './itemsAPI'

export const getRandomItems = async (monster?: string) => {
    if (!monster) return 
    const result = await axios.get<IItem[]>(`/items/random?monster=${ monster }`)
    console.log(result)
    return result.data
}
