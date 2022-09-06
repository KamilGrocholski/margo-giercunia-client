import { Link, NavLink } from "react-router-dom"

interface INavItemPROPS {
    label: string
    link: string
    img?: string
}

const NAV_ITEMS_LIST = [
    {
        label: 'Symulator',
        link: '/symulator'
    },
    {
        label: 'Statystyki',
        link: '/statystyki'
    }
] as const

const NavItem = (item: INavItemPROPS) => {
    return (
        <NavLink
            to={ item.link }
            className={ ({ isActive }) => {
                return `px-3 py-1 rounded-lg hover:bg-gray-500 font-bold text-xl ${ isActive ? 'text-cyan-500' : 'text-white' }`
            } }
        >
            { item.label }
        </NavLink>
    )
}

const Nav = () => {
  return (
    <nav
        className='flex flex-col w-1/5 h-full pl-24 pr-3 space-y-3 border'
    >
        <Link
            to='/'
            className='mb-24'
        >
            Nie wiem
        </Link>
        {NAV_ITEMS_LIST.map((item, i) => (
            <NavItem key={ i } {...item} />
        ))}
    </nav>
  )
}

export default Nav