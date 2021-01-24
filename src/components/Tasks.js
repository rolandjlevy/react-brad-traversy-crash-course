import React from 'react';
import Task from './Task';

const Tasks = ({tasks, onDelete}) => {
  return (
    <ul>
      {tasks.map(task => (<Task key={task.id} task={task} onDelete={onDelete} />))}
    </ul>
  )
}

export default Tasks;