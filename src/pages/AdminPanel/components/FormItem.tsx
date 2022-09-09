import { useEffect, useState } from 'react'
import { createItem, IItem } from '../../../api/itemsAPI'
import useAdminPanel from '../../../store/AdminPanelStore'

const FormItem = () => {

    const { monster } = useAdminPanel()

    const [formData, setFormData] = useState<IItem>({   
        name: '',
        img: '',
        lvl: 1,
        rarity: 'rare',
        monster: monster ?? ''
    })

    useEffect(() => {
      let first = true
    
      if (first) {
        setFormData({
            ...formData,
            monster: monster ?? ''
        })
      }

      return () => {
        first = false
      }
    }, [monster])
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
        const res = await createItem(formData)
        console.log(res)
    }

  return (
    <form onSubmit={ handleSubmit } className='text-white flex flex-col space-y-3 w-64'>
        <input 
            type='text'
            placeholder="Nazwa"
            value={ formData.name }
            onChange={ e => setFormData({ ...formData, name: e.target.value }) }  
            className='px-2 py-1 bg-slate-900'
        />
        <input 
            type='number'
            placeholder="Poziom"
            value={ formData.lvl }
            onChange={ e => setFormData({ ...formData, lvl: parseInt(e.target.value) }) }  
            className='px-2 py-1 bg-slate-900'
        />
        <select
            value={ formData.rarity }
            placeholder="Rzadkość"
            onChange={ e => setFormData({ ...formData, rarity: e.target.value === 'common' ? 'common' : e.target.value === 'rare' ? 'rare' : e.target.value === 'heroic' ? 'heroic' : e.target.value === 'legendary' ? 'legendary' : 'rare' }) }
            className='px-2 py-1 bg-slate-900'
        >
            <option value='common'>Zwykły</option>
            <option value='rare'>Rzadki</option>
            <option value='heroic'>Heroiczny</option>
            <option value='legendary'>Legendarny</option>
        </select>
        <input 
            type='text'
            placeholder="Obraz"
            value={ formData.img }
            onChange={ e => setFormData({ ...formData, img: e.target.value }) }  
            className='px-2 py-1 bg-slate-900'
        />
        <input 
            value={ formData.monster }
            disabled={ true }
        />
        <button type='submit' className='bg-slate-900 px-2 py-1'>
            Dodaj
        </button>
    </form>
  )
}

export default FormItem