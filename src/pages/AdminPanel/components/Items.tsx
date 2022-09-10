import { MARGONEM_CONSTS } from "../../../consts/Margonem"
import useAdminPanel from "../../../store/AdminPanelStore"

const Items = () => {

    const { monster, setItemsWindow, setItem } = useAdminPanel()

  return (
    <div className='grid grid-cols-10 gap-2'>
        <button
            onClick={ () => setItemsWindow('itemsCreation') }
            className='h-[32px] w-[32px] bg-slate-900'
        >
            +
        </button>
        {monster &&
        monster.items.map((item, i) => (
            <div>
                <button     
                    onClick={ () => { setItemsWindow('itemsEditing'); setItem(item) } }          
                    className='h-[32px] w-[32px]'
                >
                    <img 
                        src={item.img}
                        alt={ item.name }
                        style={{
                            backgroundColor: MARGONEM_CONSTS.RARITIES[item.rarity as keyof typeof MARGONEM_CONSTS.RARITIES].color,
                        }}
                        width={ 32 }
                        height={ 32 }
                    />
                </button>
            </div>
        ))}
    </div>
  )
}

export default Items