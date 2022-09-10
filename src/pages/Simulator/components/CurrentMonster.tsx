import { useState } from "react"
import useSimulator from "../../../store/SimulatorStore"
import { getRandomItems } from "../../../api/simulatorAPI"

export const CurrentMonster = () => {

    const { currentMonster, setItems, isWindowOpen, setIsWindowOpen } = useSimulator()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleGetRandomItems = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const newItems = await getRandomItems(currentMonster?.name)
            if (!newItems) return 
            !isWindowOpen && setItems(newItems)
            setIsWindowOpen(true)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button 
            disabled={ isLoading || isWindowOpen }
            onClick={ handleGetRandomItems }
            className='relative flex flex-col items-center justify-between shadow-black shadow drop-shadow-lg w-48 h-48 p-3 bg-texture-strong rounded-lg hover:outline hover:outline-primary'
        >
            <div className='flex flex-row justify-between space-x-3 w-full'> 
                <div className='font-semibold text-md'>
                    {currentMonster?.name }
                </div>
                <div className='text-lg font-semibold'>
                    { currentMonster?.lvl }
                </div>
            </div>
            <img 
                src={ currentMonster?.img }
                alt={ currentMonster?.name }
                width={ 128 }
                height={ 128 }
            />
        </button>
    )
}

export default CurrentMonster