import create from 'zustand'
export interface ISession {
    accessToken?: string
    setAccessToken: (accessToken?: string) => void
    role?: 'admin' | 'user'
    setRole: (role?: 'admin' | 'user') => void
}

const Session = create<ISession>(set => ({
    accessToken: undefined,
    setAccessToken: (accessToken) => set(state => ({ accessToken })),
    role: undefined,
    setRole: (role) => set(state => ({ role }))
}))

export default Session