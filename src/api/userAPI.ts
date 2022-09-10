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
    const result = await axios.post<{ msg: string, status: string }>('/users/register', { username, password })
    return result.data
}

export const login = async ({ username, password }: { username: string, password: string }) => {
    const result = await axios.post<{ accessToken?: string, msg: string, status: string }>('/users/login', { username, password }, { withCredentials: true })
    return result.data
}

export const logout = async () => {
    const result = await axios.get('/users/logout', { withCredentials: true })
    return result
}

export const refresh = async () => {
    const result = await axios.get('/users/refresh', { withCredentials: true })
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            return err
        })
    return result
} 

export const getUsersByMonstersKills = async () => {
    const result = await axios.get<IUser[]>('/users/byMonstersKills')
    return result.data
}