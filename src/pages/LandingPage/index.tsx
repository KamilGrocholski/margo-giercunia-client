import { useQuery } from "@tanstack/react-query"
import { getUsersByMonstersKills } from "../../api/userAPI"

const LandingPage = () => {

    const { data, isError, isLoading, error } = useQuery(['usersByMonstersKills'], () => getUsersByMonstersKills())

  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
        <div className='flex flex-col border p-3'>
            {data &&
            data.map((user, i) => (
                <div key={ i } className='flex flex-col w-64'>
                    <div className='flex flex-row justify-between'>
                        <div>
                            { user.username }
                        </div>
                    </div>
                    <div>PT: { user.totalStats.monstersKills }</div>
                    <div className='flex flex-row space-x-3 justify-center items-center'>
                        <div>Ż: { user.totalStats.itemsByRarity.rare }</div>
                        <div>H: { user.totalStats.itemsByRarity.heroic }</div>
                        <div>L: { user.totalStats.itemsByRarity.legendary }</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LandingPage