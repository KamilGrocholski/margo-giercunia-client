import { MARGONEM_CONSTS } from "../consts/Margonem"

const useRarityColor = (rarity: keyof typeof MARGONEM_CONSTS.RARITIES) => MARGONEM_CONSTS.RARITIES[rarity].color
export default useRarityColor