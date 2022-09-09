import { useState } from "react"
import { login } from "../api/userAPI"
import Session from "../store/SesstionStore"

const LoginPage = () => {

    const { setAccessToken, accessToken } = Session()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = await login(formData)
        if (!token) return 
        setAccessToken(token)
        console.log(accessToken)
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
            <button type='submit'>Zaloguj</button>
        </form>
    </div>
  )
}

export default LoginPage