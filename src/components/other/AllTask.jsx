import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-45'>

      <div className='flex mb-2 justify-between  bg-red-400 py-2 px-4 rounded'>
        <h2 className='text-lg font-medium w-1/5 '>Elmpoyee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>

      <div id='all-task' className='h-[80%] overflow-auto'>
        {userData.map((elem, idx) => {
          return <div key={idx} className='flex mb-2 justify-between py-2 px-4 rounded'>
          <h2 className='text-lg font-medium w-1/5 text-white-600'>{elem.firstname}</h2>
          <h3 className='text-lg font-medium w-1/5 textBlue'>{elem.TaskCounts.newTask}</h3>
          <h5 className='text-lg font-medium w-1/5 textYellow'>{elem.TaskCounts.active}</h5>
          <h5 className='text-lg font-medium w-1/5 textGreen'>{elem.TaskCounts.completed}</h5>
          <h5 className='text-lg font-medium w-1/5 textRed'>{elem.TaskCounts.failed}</h5>
        </div>
        })}
      </div>
    
    </div>
  )
}

export default AllTask
