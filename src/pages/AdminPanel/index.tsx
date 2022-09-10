import Monsters from "./components/Monsters"
import useAdminPanel from "../../store/AdminPanelStore"
import MonsterEdit from "./components/MonsterEdit"
import MonsterCreate from "./components/MonsterCreate"
import Items from "./components/Items"
import ItemCreate from "./components/ItemCreate"
import ItemEdit from "./components/ItemEdit"

const AdminPanel = () => {

  const { window, itemsWindow } = useAdminPanel()

  return (
    <div className='flex flex-col items-center justify-center space-y-3 min-w-screen'>
      <div className='flex flex-row space-x-5'>
        { window === 'monstersEditing' && <MonsterEdit /> }
        { window === 'monstersCreation' && <MonsterCreate /> }
        <div className='flex flex-row p-3 space-x-3 border'>
          { window === 'monstersEditing' && <Items /> }
          { itemsWindow === 'itemsEditing' && window === 'monstersEditing' && <ItemEdit /> }
          { itemsWindow === 'itemsCreation' && window === 'monstersEditing' && <ItemCreate /> }
        </div>
      </div>
      <Monsters />
    </div>
  )
}

export default AdminPanel