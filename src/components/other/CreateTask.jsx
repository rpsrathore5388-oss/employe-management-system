import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({title, description, taskDate, category, active: false, newTask: true, completed: false, failed: false})

        const data = userData

        data.forEach((elem) => {
            if(asignTo == elem.firstname){
                elem.tasks.push(newTask)
                elem.TaskCounts.newTask += 1
            }
        })
        setUserData(data)
        console.log(data)
        
        
        
        setAsignTo('')
        setCategory('')
        setDescription('')
        setTaskDate('')
        setTitle('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value)
                    }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input value={asignTo}
                    onChange={(e) => {
                        setAsignTo(e.target.value)
                    }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Employee name'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input value={category}
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Design/Dev./Etc.'/>
                </div>
            </div>
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' onSubmit={submitHandler}>Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask
