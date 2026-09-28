import React from 'react'

const AcceptTask = ({data}) => {
  return (
      <div className='shrink-0 h-full w-75 p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='flex mt-4 justify-between'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded active:scale-102 cursor-pointer'>Mark As Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded active:scale-102 cursor-pointer'>Mark As Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
