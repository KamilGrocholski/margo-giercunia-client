import { useQuery} from "@tanstack/react-query"
import { getAllMonsters, IMonster } from "../../../api/monstersAPI"
import useAdminPanel from "../../../store/AdminPanelStore"

const Monsters = () => {

    const { setMonster, monster: selectedMonster, setWindow } = useAdminPanel()
    const { data } = useQuery(['monsters'], () => getAllMonsters())
    

    const handleOpenEditingWindow = (e: React.MouseEvent<HTMLButtonElement>, monster: IMonster) => {
        setWindow('monstersEditing')
        setMonster(monster)
    }

    const handleOpenCreationWindow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setWindow('monstersCreation')
    }   

  return (
    <div>
        {data &&
        <div className='grid grid-cols-6 gap-5'> 
            <button
                onClick={ handleOpenCreationWindow }
                className='flex flex-col items-center justify-center h-56 p-3 space-y-3 bg-gray-700/50'
            >
                Dodaj
            </button>
            {data.map((monster, i) => (
                <button 
                    id={ monster.name }
                    onClick={ e => handleOpenEditingWindow(e, monster) }
                    key={ i } 
                    className={ `flex flex-col items-center justify-between space-y-3 h-56 bg-gray-700/50 p-3 ${ selectedMonster?.name === monster.name && 'outline outline-sky-500 outline-1' }` }>
                    <div className='flex flex-col justify-between w-full space-y-1'>
                        <div className='text-center'>{ monster.name }</div>
                        <div className='text-center'>{ monster.lvl } lvl</div>
                    </div>
                    <img 
                        src={ monster.img }
                        alt={ monster.name }
                        width={ 128 }
                        height={ 128 }
                    />
                </button>
            ))}
        </div>}
    </div>
  )
}

export default Monsters