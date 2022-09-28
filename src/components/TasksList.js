import {useSelector, useDispatch} from 'react-redux';
import {deleteTask} from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

function TasksList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  console.log(tasks)
  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1 className='color-violet'>Tasks {tasks.length}</h1>
        <Link 
          to="/create-task"
          className='bg-purple-400 px2 py-1 rounded-md  text-sm'
        >
        Create Task
        </Link>
      </header>
      <div className='grid grid-cols-3 gap-4'>
      {tasks.map(task => (
        <div key={task.id} className='bg-purple-900 p-4 rounded-md'>
          <header className='flex  justify-between '>
            <h3>{task.title}</h3>
            <div className='flex gap-x-2'>
              <button 
              className='bg-purple-300 px-2 py-1 text-xs rounded-md' 
              onClick={() => handleDelete(task.id)}>Delete</button>
              <Link 
                to={`/edit-task/${task.id}`}
                className='bg-rose-500 px-2 py-1 text-xs rounded-md'
                >
                  Edit
                  </Link>
            </div>
          </header>
          <p>{task.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TasksList