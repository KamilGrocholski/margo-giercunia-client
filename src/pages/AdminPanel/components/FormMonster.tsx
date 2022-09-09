import { useMutation, useQueryClient } from "@tanstack/react-query"
import React, { useState } from "react"
import { createMonster, IMonster } from "../../../api/monstersAPI"

const FormMonster = () => {

    const [formData, setFormData] = useState<{ name: IMonster['name'], img: IMonster['img'], lvl: IMonster['lvl'], type: IMonster['type'] }>({
        name: '',
        img: '',
        lvl: 1,
        type: 'K'
    })

    const queryClient = useQueryClient()
    const { mutate } = useMutation(createMonster, {
        onSuccess: () => {
            queryClient.invalidateQueries(['monsters'])
        }
    })


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        mutate(formData)
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
            value={ formData.type }
            placeholder="Typ"
            onChange={ e => setFormData({ ...formData, type: e.target.value === 'K' ? 'K' : e.target.value === 'T' ? 'T' : 'K' }) }
            className='px-2 py-1 bg-slate-900'
        >
            <option value='K'>Kolos</option>
            <option value='T'>Tytan</option>
        </select>
        <input 
            type='text'
            placeholder="Obraz"
            value={ formData.img }
            onChange={ e => setFormData({ ...formData, img: e.target.value }) }  
            className='px-2 py-1 bg-slate-900'
        />
        <button type='submit' className='bg-slate-900 px-2 py-1'>
            Dodaj
        </button>
    </form>
  )
}

export default FormMonster