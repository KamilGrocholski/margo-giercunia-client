import create from 'zustand'
import { IMonster } from '../pages/Simulator/components/MonstersList'

interface ICurrentMonsterState {
    currentMonster: IMonster | null
    changeCurrentMonster: (monster: IMonster) => void
}

const useCurrentMonster = create<ICurrentMonsterState>(set => ({
    currentMonster: null,
    changeCurrentMonster: (monster) => set(state => {
        return {
            ...state,
            currentMonster: monster
        }
    })
}))

export default useCurrentMonster