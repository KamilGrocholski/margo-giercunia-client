import React from "react"
import useCurrentMonster from "../../../zustandStore/useCurrentMonster"

export interface IMonster {
    name: string
    lvl: number
    img: string  
}

export const MONSTERS_LIST: IMonster[] = [
    {
        name: 'Mamlambo',
        lvl: 36,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/mamlambo_final2.gif'
    },
    {
        name: 'Regulus Mętnooki',
        lvl: 63,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif'
    },
    {
        name: 'Umibozu',
        lvl: 90,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif'
    },
    {
        name: 'Amaimon Soploręki',
        lvl: 117,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif'
    },
    {
        name: 'Hydrokora Chimeryczna',
        lvl: 144,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif'
    },
    {
        name: 'Vashkar',
        lvl: 171,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif'
    },
    {
        name: 'Lulukav',
        lvl: 198,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif'
    },
    {
        name: 'Arachin Podstępny',
        lvl: 225,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif'
    },
    {
        name: 'Reuzen',
        lvl: 252,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif'
    },
    {
        name: 'Wernoradzki Drakolisz',
        lvl: 279,
        img: 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif'
    }
]

export const Monster = (monster: IMonster) => {
    const { changeCurrentMonster } = useCurrentMonster()
    const handleSetMonster = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeCurrentMonster(monster)
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

const MonstersList = ({ monstersList }: { monstersList: IMonster[] }) => {
    return (
        <div className='grid grid-cols-5 gap-5'>
            {monstersList.map((monster, i) => (
                <Monster key={ i } { ...monster } />
            ))}
        </div>
    )
}

export default MonstersList