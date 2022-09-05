import { useState } from "react"

export interface IItem {
    name: string
    rarity: 'common' | 'rare' | 'heroic' | 'legendary'
    lvl: number
    img: string
    monster: string
}

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

const Item = (item: IItem) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsOpen(prev => prev === false ? !prev : prev)
    }

    return (
        <div
            onClick={ handleOpen }
            className='relative flex items-center justify-center w-16 h-16 outline outline-gray-700 rounded-lg bg-gray-900'
        >
            {isOpen
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
                <div className='w-full h-full bg-black'>
                    xD
                </div>
            }
        </div>
    )
}

const ItemsWindow =  ({ items }: {items: IItem[] }) => {
    return (
        <div className='grid grid-cols-5 gap-3'>
            {items.map((item, i) => (
                <Item key={ i } { ...item } />
            ))}
        </div>
    )
}

export default ItemsWindow