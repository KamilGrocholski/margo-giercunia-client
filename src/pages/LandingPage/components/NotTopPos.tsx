import { IUser } from "../../../api/userAPI"
import { CubeIcon } from "../../../assets/svg/CubeIcon"
import useNumberFormat from "../../../hooks/useNumberFomrat"
import useRarityColor from "../../../hooks/useRarityColors"

const NotTopPos = ({ username, totalStats, n }: IUser & { n: number }) => {
  return (
    <div className='grid grid-cols-8 px-3 bg-texture-strong items-center h-10 w-full'>
        <div className='col-span-1 flex items-center flex-row'>
          <div className='text-lg'>
            #
          </div>
          <div>
            { n + 1 }
          </div>
        </div>
        <div className='col-span-2 max-w-[150px] truncate ...'>{ username }</div>
        <div className='col-span-2 flex flex-row space-x-3 items-center'>
          <div className='textMuted'>
            Pokonane potwory
          </div>
          <div>
            { useNumberFormat(totalStats.monstersKills) }
          </div>
        </div>
        <div className='col-span-3 grid grid-cols-3'> 
            <div className='flex flex-row space-x-3'>
              <div style={ { color: useRarityColor('rare') } }><CubeIcon /></div>
              <div>{ useNumberFormat(totalStats.itemsByRarity.rare) }</div>
            </div>
            <div className='flex flex-row space-x-3'>
              <div style={ { color: useRarityColor('heroic') } }><CubeIcon /></div>
              <div>{ useNumberFormat(totalStats.itemsByRarity.heroic) }</div>
            </div>
            <div className='flex flex-row space-x-3'>
              <div style={ { color: useRarityColor('legendary') } }><CubeIcon /></div>
              <div>{ useNumberFormat(totalStats.itemsByRarity.legendary) }</div>
            </div>
        </div>
    </div>
  )
}

export default NotTopPos