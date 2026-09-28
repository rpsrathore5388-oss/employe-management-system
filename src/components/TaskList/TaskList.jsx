import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

  return (
    <div className='flex overflow-x-auto task-list items-center justify-start gap-5 flex-nowrap mt-10 h-[55%] py-5 w-full'>
      {data.tasks.map((elem, idx) => {
        if(elem.title == ''){
          return
        }
        if(elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }

      })}
    </div>
    
  )
}

export default TaskList
