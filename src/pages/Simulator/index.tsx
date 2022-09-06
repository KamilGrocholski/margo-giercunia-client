import useSimulator from "../../store/SimulatorStore"
import Monster from "./components/CurrentMonster"
import ItemsWindow from "./components/ItemsWindow"
import MonstersList from "./components/MonstersList"


const Simulator = () => {

    const { currentMonster, items, isWindowOpen } = useSimulator()

  return (
    <div className='flex items-center justify-center w-full h-full flex-col space-y-12 border'>
        <MonstersList />
        {currentMonster &&
        <div className='relative w-full h-full border flex items-center justify-center'>
            {items && isWindowOpen && <ItemsWindow items={ items } />}
            <Monster />
        </div>}
    </div>
  )
}

export default Simulator