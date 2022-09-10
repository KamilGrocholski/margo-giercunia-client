import { IUser } from "../../../api/userAPI"
import { CubeIcon } from "../../../assets/svg/CubeIcon"
import { HashTag } from "../../../assets/svg/HashTag"
import useRarityColor from "../../../hooks/useRarityColors"

const TopPos= ({ username, totalStats, n }: IUser & { n: number }) => {

  const itemsByRarityCSS = 'text-md text-cyan-500/90'

  return (
    <div className='flex flex-col space-y-3 drop-shadow-lg shadow shadow-black bg-texture-strong p-3 rounded-md'>

      <div className='flex flex-row items-center w-full'>
        <div>
          <HashTag />
        </div>
        <div className='text-xl'>
          { n + 1 }
        </div>
      </div>

      <div className='text-2xl text-center w-full max-w-full font-semibold truncate ...'>
        { username }
      </div>

      <div className='flex flex-col space-x-2 text-center w-[70%] mx-auto'>
        <div className='textMuted'>Pokonane potwory</div>
        <div>{ totalStats.monstersKills }</div>
      </div>

      <div className='w-[70%] flex mx-auto flex-col space-y-1'>
        <div className='textMuted text-center mb-1'>
          Zdobyte przedmioty
        </div>
        <div className='flex flex-row space-x-2'>
          <div style={ { color: useRarityColor('rare') } }><CubeIcon /></div>
          <div className={ itemsByRarityCSS }>{ totalStats.itemsByRarity.rare }</div>
        </div>
        <div className='flex flex-row space-x-2'>
          <div style={ { color: useRarityColor('heroic') } }><CubeIcon /></div>
          <div className={ itemsByRarityCSS }>{ totalStats.itemsByRarity.heroic }</div>
        </div>
        <div className='flex flex-row space-x-2'>
          <div style={ { color: useRarityColor('legendary') } }><CubeIcon /></div>
          <div className={ itemsByRarityCSS }>{ totalStats.itemsByRarity.legendary }</div>
        </div>
      </div>

    </div>
  )
}

export default TopPos