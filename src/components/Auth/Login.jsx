import React, { useState } from 'react'

const Login = ({handleLogin}) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='rounded-2xl border-2 border-emerald-600 p-20'>
        <form 
        onSubmit={(e) => {
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            required 
            className='bg-transparent outline-none border-2 py-3 px-5 border-emerald-600 text-xl rounded-full placeholder:text-gray-400' 
            type="email" 
            placeholder='Enter Your E-mail'
            />
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            required 
            className='mt-3 bg-transparent outline-none border-2 py-3 px-5 border-emerald-600 text-xl rounded-full placeholder:text-gray-400' 
            type="password" 
            placeholder='Enter Password'
            />
            <button 
            className='outline-none border-none mt-5 py-3 px-5 bg-emerald-600 text-xl rounded-full placeholder:text-white'
            >Login
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login
