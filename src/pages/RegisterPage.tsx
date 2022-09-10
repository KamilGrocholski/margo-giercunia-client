import { useState } from "react"
import { register } from "../api/userAPI"

const RegisterPage = () => {

    const [msgStatus, setMsgStatus] = useState<{ status: string, msg: string } | undefined>(undefined)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const registerResponse = await register(formData)
        setMsgStatus({
            status: registerResponse.status,
            msg: registerResponse.msg
        })
    }

  return (
    <div className='w-1/5 mx-auto flex flex-col space-y-16 items-center justify-center h-1/2 mt-auto p-3 bg-texture-strong'>
        <div className='w-full text-center font-semibold text-xl'>Rejestracja</div>
        {msgStatus && 
        <div className={ `w-full text-center ${ msgStatus.status === 'error' ? 'text-danger' : 'text-success'  }` }>
            { msgStatus.msg }
        </div>}
        <form onSubmit={ handleSubmit } className='flex flex-col space-y-3 w-full'>
            <input 
                type='text'
                placeholder='Nazwa użytkownika'
                value={ formData.username }
                onChange={ e => setFormData({ ...formData, username: e.target.value }) }
                className='bg-texture-light px-3 py-1'
            />
            <input 
                type='password'
                placeholder='Hasło'
                value={ formData.password }
                onChange={ e => setFormData({ ...formData, password: e.target.value }) }
                className='bg-texture-light px-3 py-1'
            />
            <button type='submit' className='bg-primary px-3 py-1 text-black font-semibold text-center'>Stwórz konto</button>
        </form>
    </div>
  )
}

export default RegisterPage