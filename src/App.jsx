import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, serUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser', '')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      console.log(userData);
    }

  }, [])
  
  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == 'p12'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }else if(userData){
      const employee = userData.find((e) => email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
      }
    } else {
      alert('Invaild Credentials')
    }
  }
 
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmpolyeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) } 
    </>
  )
}

export default App
