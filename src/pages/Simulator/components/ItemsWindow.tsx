import useSimulator, { ISimulatorItem } from "../../../store/SimulatorStore"

const MARGONEM_CONSTS = {
    RARITIES: {
        'common': {
            full: 'Zwykły',
            color: '#ffffff'
        },
        'rare': {
            full: 'Rzadki',
            color: '#e6cc80'
        },
        'heroic': {
            full: 'Heroiczny',
            color: '#0070dd'
        },
        'legendary': {
            full: 'Legendarny',
            color: '#ff8000'
        }
    }
} as const

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
            
            className={ `relative hover:animate-pulse-bg-infinite 
            ${ item.rarity === 'legendary' ? 
            'from-orange-500/30 to-orange-500/50' :
            item.rarity === 'heroic' ?
            'from-blue-500/30 to-blue-500-50' :
            item.rarity === 'rare' ?
            'from-yellow-500/30 to-yellow-500/50' :
            'from-gray-500/30 to-gray-500/50'}
             shadow-black flex items-center justify-center w-16 h-16 outline outline-gray-700 rounded-lg bg-gray-900` }
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
        <div className='flex flex-col space-y-8 z-10 absolute top-0 right-1/5 left-1/5 h-fit items-center justify-center bg-gray-900/90 p-3'>
            <div className='grid grid-cols-5 gap-3 h-full w-full'>
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
                className='p-3 border bg-gray-900/50'
            >
                Zamknij
            </button>
        </div>
    )
}

export default ItemsWindow