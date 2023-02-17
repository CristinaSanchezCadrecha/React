import React, {useState} from 'react';
import './App.css';
import FormTasks from './components/FormTasks';
import Header from './components/Header';
import ListTasks from './components/ListTasks';


const App = () => {
  const [tasks, changeTasks] = useState(
    [
      {
        id: 1,
        text: 'Hacer la compra',
        done: false
      },
      {
        id: 2,
        text: 'Estudiar React',
        done: false
      }
    ]
  );

  console.log(tasks);

  return (
    <div className='container'>
      <Header />
      <FormTasks tasks={tasks} changeTasks={changeTasks}/>
      <ListTasks  tasks={tasks}/>
    </div>
  );
}

export default App;
