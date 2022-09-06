import { useQuery } from "@tanstack/react-query"
import React from "react"
import { getAllMonsters, IMonster } from "../../../api/monstersAPI"
import useSimulator from "../../../store/SimulatorStore"

export const Monster = (monster: IMonster) => {

    const { setCurrentMonster } = useSimulator()

    const handleSetMonster = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrentMonster(monster)
    }

    return (
        <button 
            onClick={ handleSetMonster }
            className='flex flex-col items-center justify-between w-48 h-48 p-3 bg-gray-900 rounded-lg hover:outline hover:outline-cyan-500'
            >
            <div className='flex flex-row justify-between space-x-3 w-full'> 
                <div className='font-semibold text-md'>
                    { monster.name }
                </div>
                <div className='text-lg font-semibold'>
                    { monster.lvl }
                </div>
            </div>
            <img 
                src={ monster.img }
                alt={ monster.name }
                width={ 128 }
                height={ 128 }
            />
        </button>
    )
}

export const MonstersList = () => {

    const { isLoading, isError, error, data: monstersList } = useQuery<IMonster[]>(['monstersList'], getAllMonsters)

    if (isLoading)
    return (
        <div>
            Loading...
        </div>
    )
    if (isError) 
    return (
        <div>
            { JSON.stringify(error) }
        </div>
    )
    if (monstersList)
    return (
        <div className='grid grid-cols-5 gap-5'>
            {monstersList.map((monster, i) => (
                <Monster 
                    key={ i } 
                    name={ monster.name }
                    type={ monster.type }
                    lvl={ monster.lvl }
                    img={ monster.img }
                    items={ monster.items }
                />
            ))}
        </div>
    )
    return (
        <div>
            dziwne
        </div>
    )
}

export default MonstersList