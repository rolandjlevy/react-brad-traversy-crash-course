import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: '1 Feb 2021',
      reminder: false
    },
    {
      id: 2,
      text: 'Volunteering',
      day: '25 Feb 2021',
      reminder: true
    },
    { 
      id: 3,
      text: 'Housework',
      day: '12 Mar 2021',
      reminder: true
    },
    { 
      id: 4,
      text: 'Admin',
      day: '19 Mar 2021',
      reminder: true
    }
  ]);

  const [count, setId] = useState(tasks.length + 1)

  const addTask = (task) => {
    setId(count + 1);
    setTasks(
      [...tasks, { ...task, id:count } ]
    );
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  }
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => {
        const toggled = {...task, reminder:!task.reminder};
        return task.id === id ? toggled : task
      })
    );
  }
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks')}
    </div>
  )
}

export default App;
