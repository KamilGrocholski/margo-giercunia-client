import axios from './axios'

export interface IUser {
    username: string
    totalStats: {
        monstersKills: number
        itemsByRarity: {
            common: number
            rare: number
            heroic: number
            legendary: number
        }
    }
}

export const register = async ({ username, password }: { username: string, password: string }) => {
    const result = await axios.post('/users/register', { username, password })
    return result.data
}

export const login = async ({ username, password }: { username: string, password: string }) => {
    const result = await axios.post('/users/login', { username, password }, { withCredentials: true })
    return result.data
}

export const logout = async () => {
    const result = await axios.get('/users/logout', { withCredentials: true })
    console.log(result)
    return result
}

export const refresh = async () => {
    const result = await axios.get('/users/refresh', { withCredentials: true })
    console.log(result)
    return result.data
} 

export const getUsersByMonstersKills = async () => {
    const result = await axios.get<IUser[]>('/users/byMonstersKills')
    console.log(result)
    return result.data
}