import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-pink-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-4'>
            <button className='border-2 py-1 px-2 text-sm rounded active:scale-102 cursor-pointer'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
