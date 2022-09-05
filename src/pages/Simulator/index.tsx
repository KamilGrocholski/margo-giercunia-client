import useCurrentMonster from "../../zustandStore/useCurrentMonster"
import ItemsWindow, { IItem } from "./components/ItemsWindow"
import MonstersList, { Monster, MONSTERS_LIST } from "./components/MonstersList"

const ITEMS: IItem[] = [
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    },
    {
        name: 'Hełm',
        rarity: 'legendary',
        lvl: 63,
        monster: 'Regulus mętnooki',
        img: 'https://micc.garmory-cdn.cloud/obrazki/itemy//hel/helm254.gif'
    }
]

const Simulator = () => {
    const { currentMonster } = useCurrentMonster()
  return (
    <div className='flex items-center justify-center w-full h-full flex-col space-y-12'>
        <MonstersList monstersList={ MONSTERS_LIST } />
        {currentMonster &&
        <>
            <ItemsWindow items={ ITEMS } />
            <Monster 
                { ...currentMonster }
            />
        </>}
    </div>
  )
}

export default Simulator