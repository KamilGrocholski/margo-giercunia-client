import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { editMonster, getAllMonsters, IMonster } from "../../../api/monstersAPI"
import useAdminPanel from "../../../store/AdminPanelStore"

const MonsterEdit = () => {

    const { monster } = useAdminPanel()

    const [formData, setFormData] = useState<IMonster | undefined>(monster)

    useEffect(() => {
        let first = true

        if (first) {
            setFormData(monster)
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
        if (!formData) return 
        const editResponse = await editMonster(formData)
        console.log(editResponse)
        mutate()
    }

  return (
    <div className='grid grid-cols-2 gap-5'>   
        {formData &&
        <>
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
                value={ formData.type }
                onChange={ e => setFormData({
                    ...formData,
                    type: e.target.value === 'K' ? 'K' : e.target.value === 'T' ? 'T' : 'K' 
                }) }
                className='px-2 py-1 bg-slate-900'
            >
                <option value='K'>Kolos</option>
                <option value='T'>Tytan</option>
            </select>
            <input 
                type='text'
                value={ formData.img }
                onChange={ e => setFormData({ ...formData, img: e.target.value.trim() }) }
                className='px-2 py-1 bg-slate-900'
            />
            <button
                type='submit'
                className='px-2 py-1 text-center bg-slate-900'
            >
                Zapisz
            </button>
        </form>
        </>
        }

    </div>
  )
}

export default MonsterEdit