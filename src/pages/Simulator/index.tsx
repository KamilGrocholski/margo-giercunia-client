import useSimulator from "../../store/SimulatorStore"
import Monster from "./components/CurrentMonster"
import ItemsWindow from "./components/ItemsWindow"
import MonstersList from "./components/MonstersList"


const Simulator = () => {

    const { currentMonster, items, isWindowOpen } = useSimulator()

  return (
    <div className='flex items-center justify-center min-w-screen min-h-screen flex-col space-y-12'>
        {currentMonster &&
        <div className='relative w-full h-full flex items-center justify-center'>
            {items && isWindowOpen && <ItemsWindow items={ items } />}
            <Monster />
        </div>}
        <MonstersList />
    </div>
  )
}

export default Simulator