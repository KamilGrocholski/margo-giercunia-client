import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { createItem, IItem } from "../../../api/itemsAPI"
import { getAllMonsters } from "../../../api/monstersAPI"
import useAdminPanel from "../../../store/AdminPanelStore"

const ItemCreate = () => {

    const { monster } = useAdminPanel()

    const [formData, setFormData] = useState<IItem>({
        name: '',
        lvl: 1,
        rarity: 'rare',
        img: '',
        monster: monster?.name ?? ''
    })

    useEffect(() => {
      let first = true
    
      if (first) {
        if (!monster?.name) return 
        setFormData({
            ...formData,
            monster: monster.name
        })
    }
    
    return () => {
        first = false
      }
    }, [monster])
    
    const queryClient = useQueryClient()
    const {  mutate } = useMutation(getAllMonsters, {
        onSuccess: () => {
            queryClient.invalidateQueries(['monsters'])
        }
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const createResponse = await createItem(formData)
        console.log(createResponse)
        mutate()
    }

  return (

        <div>   
            {formData &&
            <form onSubmit={ handleSubmit } className='flex flex-col space-y-3 text-white'>
                <input 
                    type='text'
                    value={ formData.name }
                    onChange={ e => setFormData({ ...formData, name: e.target.value.trim() }) }
                    className='px-2 py-1 bg-slate-900'
                />
                <input 
                    type='number'
                    value={ formData.lvl }
                    onChange={ e => setFormData({ ...formData, lvl: parseInt(e.target.value) }) }
                    className='px-2 py-1 bg-slate-900'
                />
                <select 
                    value={ formData.rarity }
                    onChange={ e => setFormData({
                        ...formData,
                        rarity: e.target.value === 'common' ? 'common' : e.target.value === 'rare' ? 'rare' : e.target.value === 'heroic' ? 'heroic' : e.target.value === 'legendary' ? 'legendary' : 'rare' 
                    }) }
                    className='px-2 py-1 bg-slate-900'
                >
                    <option value='common'>Zwykły</option>
                    <option value='rare'>Rzadki</option>
                    <option value='heroic'>Heroiczny</option>
                    <option value='legendary'>Legendarny</option>
                </select>
                <input 
                    type='text'
                    value={ formData.img }
                    onChange={ e => setFormData({ ...formData, img: e.target.value.trim() }) }
                    className='px-2 py-1 bg-slate-900'
                />
                <p className='px-2 py-1 bg-slate-900'>
                    { formData.monster }
                </p>
                <button
                    type='submit'
                    className='px-2 py-1 text-center bg-slate-900'
                >
                    Stwórz
                </button>
            </form>}
        </div>
  )
}

export default ItemCreate