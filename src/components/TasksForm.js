import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTask, editTask} from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams} from 'react-router-dom';

function TasksForm() {
  const[task, setTask] = useState({
    title:'',
    description: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task, 
      [e.target.name]:e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   if(params.id) {
    dispatch(editTask(task))
   } else {
    dispatch(addTask({
      ...task,
      id:uuid(),
     }))
   }
   navigate("/")
  };

  useEffect(() => {
    if(params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  },[params.id, tasks])
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className='bg-violet-500 max-w-screen-sm p-4	'
      >
        <label htmlFor="title" className='block text-xs font-bold mb-2'>Task:</label>
        <input
          className='w-full p-2 rounded-md bg-purple-900 mb-2'
          type="text"
          name="title"
          placeholder="title"
          value={task.title}
          onChange={handleChange}
        />
        <label htmlFor="description" className='block text-xs font-bold mb-2'>Description:</label>
        <textarea 
          className='w-full p-2 rounded-md bg-purple-900 mb-2'
          name="description" 
          placeholder="description"
          value={task.description}
          onChange={handleChange} 
        ></textarea>
        <button
        className='bg-purple-400 px-2 py-1 rounded-md'>Save</button>
    </form>
  )
}

export default TasksForm