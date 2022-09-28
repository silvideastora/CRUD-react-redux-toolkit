import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="bg-purple-700 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList/>} />
          <Route path="/create-task" element={<TasksForm/>} />
          <Route path="/edit-task/:id" element={<TasksForm/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
