import FormItem from "./components/FormItem"
import FormMonster from "./components/FormMonster"
import Monsters from "./components/Monsters"
import useAdminPanel from "../../store/AdminPanelStore"

const AdminPanel = () => {

  const { window, setWindow } = useAdminPanel()

  return (
    <div className='min-w-screen flex flex-col justify-center items-center space-y-3'>
      <div className='flex flex-row space-x-3'>
        <button className={ `p-1 ${ window === 'monsters' && 'outline outline-sky-500 outline-1' }` } onClick={ () => setWindow('monsters') }>Stwórz potwora</button>
        <button className={ `p-1 ${ window === 'items' && 'outline outline-sky-500 outline-1' }` } onClick={ () => setWindow('items') }>Stwórz przedmiot</button>
      </div>
      {window === 'monsters' &&
      <>
        <FormMonster />
      </>}
      {window === 'items' &&
      <>
        <FormItem />
      </>}
      <Monsters />
    </div>
  )
}

export default AdminPanel