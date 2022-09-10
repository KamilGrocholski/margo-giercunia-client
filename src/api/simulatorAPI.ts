
import { axiosPrivate } from './axios'
import { IItem } from './itemsAPI'


export const getRandomItems = async (monster?: string) => {
    if (!monster) return 
    const result = await axiosPrivate.get<IItem[]>(`/simulator/randomItems?monster=${ monster }`)
    return result.data
}
