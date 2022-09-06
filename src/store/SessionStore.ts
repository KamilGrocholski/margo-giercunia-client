import create from 'zustand'

export interface ISessionStore {
    accessToken?: string
    setAccessToken: (accessToken: string) => void
    handleLogout: () => void
}

const useSession = create<ISessionStore>(set => ({
    accessToken: undefined,
    setAccessToken: (accessToken) => set(state => ({ accessToken })),
    handleLogout: () => set(state => ({ accessToken: undefined }))
}))

export default useSession