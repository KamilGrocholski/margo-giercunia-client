import { IMonster } from "./MonstersList"

const Monster = (monster: IMonster) => {
    const handleGetRandomItems = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('losowe przedmioty')
    }

    return (
        <button 
            onClick={ handleGetRandomItems }
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

export default Monster