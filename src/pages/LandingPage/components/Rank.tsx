import { useQuery } from '@tanstack/react-query'
import { getUsersByMonstersKills } from '../../../api/userAPI'
import NotTopPos from './NotTopPos'
import TopPos from './TopPos'

const Rank = () => {

    const { data } = useQuery(['usersByMonstersKills'], () => getUsersByMonstersKills())

  return (
    <div className='flex flex-col space-y-5 items-center justify-center w-full'>
        <div className='grid grid-cols-3 gap-3 max-h-[30vh] w-[60%]'>
            {data &&
            data.map((user, i) => (
                i <= 2 &&
                <TopPos 
                    key={ i }
                    username={ user.username }
                    totalStats={ user.totalStats }
                    n={ i }
                /> 
            ))}
        </div>
        <div className='max-h-[34vh] overflow-y-scroll rounded-md drop-shadow-lg shadow shadow-black w-[60%]'>
            <div className='flex flex-col divide-y divide-black w-full'>
                {data &&
                data.map((user, i) => (
                    i > 2 &&
                    <NotTopPos 
                        key={ i }
                        username={ user.username }
                        totalStats={ user.totalStats }
                        n={ i }
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Rank