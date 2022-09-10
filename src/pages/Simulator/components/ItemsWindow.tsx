import useSimulator, { ISimulatorItem } from "../../../store/SimulatorStore"
import { MARGONEM_CONSTS } from "../../../consts/Margonem"

export const Item = ({ item, n }: { item: ISimulatorItem, n: number }) => {
    const { openItem, items } = useSimulator() 

    const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        openItem(n)
    }

    return (
        <div
            onClick={ handleOpen }
            
            className={ `relative ${ items && !items[n].isOpen && 'hover:animate-pulse-bg-infinite' } 
            ${ item.rarity === 'legendary' ? 
            'from-rarities-legendary/50 to-rarities-legendary' :
            item.rarity === 'heroic' ?
            'from-rarities-heroic/50 to-rarities-heroic' :
            item.rarity === 'rare' ?
            'from-rarities-rare/50 to-rarities-rare' :
            'from-gray-500/30 to-gray-500/50'}
             shadow-black shadow flex items-center justify-center w-16 h-16 outline outline-1 outline-texture-light rounded-lg bg-texture-strong` }
        >
            {items && items[n] && items[n].isOpen
                ? 
                <img 
                    src={ item.img }
                    alt={ item.name }
                    style={{
                        backgroundColor: MARGONEM_CONSTS.RARITIES[item.rarity as keyof typeof MARGONEM_CONSTS.RARITIES].color,
                        padding: '3px'
                    }}
                />
                : 
                <div className=''>
                    
                </div>
            }
        </div>
    )
}

export const ItemsWindow =  ({ items }: {items: ISimulatorItem[] }) => {

    const { setIsWindowOpen } = useSimulator()

    const handleCloseWindow = (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault()
            e.stopPropagation()
            if (items?.some(items => items.isOpen === false)) return
            setIsWindowOpen(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='absolute bottom-0 z-20 flex flex-col items-center justify-center p-3 space-y-8 shadow-black shadow right-1/5 left-1/5 h-fit bg-texture-strong/80'>
            <div className='grid w-full h-full grid-cols-5 gap-3'>
                {items.map((item, i) => (
                    <Item 
                        key={ i }
                        item={ item }
                        n={ i }  
                    />
                ))}
            </div>
            <button
                onClick={ handleCloseWindow }  
                className='px-3 py-1 rounded-md bg-primary/30'
            >
                Zamknij
            </button>
        </div>
    )
}

export default ItemsWindow