import { useQuery } from "@tanstack/react-query"
import { getAllMonsters } from "../../../api/monstersAPI"
import useAdminPanel from "../../../store/AdminPanelStore"

const Monsters = () => {

    const { setMonster, monster: selectedMonster } = useAdminPanel()
    const { data } = useQuery(['monsters'], () => getAllMonsters())

  return (
    <div>
        {data &&
        <div className='grid grid-cols-6 gap-5'> 
            {data.map((monster, i) => (
                <button 
                    onClick={ () => setMonster(monster.name) }
                    key={ i } 
                    className={ `flex flex-col items-center justify-between space-y-3 h-56 bg-gray-700/50 p-3 ${ selectedMonster === monster.name && 'outline outline-sky-500 outline-1' }` }>
                    <div className='flex flex-col justify-between space-y-1 w-full'>
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