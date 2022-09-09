import { useState } from "react"
import { register } from "../api/userAPI"

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await register(formData)
    }

  return (
    <div>
        <form onSubmit={ handleSubmit } className='text-black'>
            <input 
                value={ formData.username }
                onChange={ e => setFormData({ ...formData, username: e.target.value }) }
            />
            <input 
                value={ formData.password }
                onChange={ e => setFormData({ ...formData, password: e.target.value }) }
            />
            <button type='submit'>Stwórz konto</button>
        </form>
    </div>
  )
}

export default RegisterPage