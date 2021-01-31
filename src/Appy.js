import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: '1 Feb 2021',
      reminder: true
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

  // Function to delete tasks
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
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks')}
    </div>
  )
}

export default App;
