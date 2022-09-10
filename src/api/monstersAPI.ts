import axios, { axiosPrivate } from './axios'
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
    return result.data
}

export const createMonster = async ({ name, lvl, img, type }: { name: IMonster['name'], lvl: IMonster['lvl'], img: IMonster['img'], type: IMonster['type'] }) => {
    const result = await axiosPrivate.post<IMonster>('/monsters', { name, lvl, img, type })
    return result.data
}

export const getMonsterByName = async (name?: IMonster['name']) => {
    if (!name) return 
    const result = await axios.get<IMonster>(`/monsters/monster?name=${ name }`)
    return result.data
}

export const editMonster = async ({ name, lvl, img, type }: { name: IMonster['name'], lvl: IMonster['lvl'], img: IMonster['img'], type: IMonster['type'] }) => {
    const result = await axiosPrivate.post<IMonster>(`/monsters/monster?name=${ name }`, { name, lvl, img, type })
    return result.data
} 