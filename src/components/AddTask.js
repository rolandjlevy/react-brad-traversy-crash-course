import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({text, day, reminder});
    setText('');
    setDay('');
    setReminder(false);
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>Task</label>
        <input 
          type="text" 
          value={text} 
          placeholder="Add task" 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type="text" 
          value={day} 
          placeholder="Add Day & Time" 
          onChange={(e) => setDay(e.target.value)} 
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input 
          type="checkbox" 
          checked={reminder} 
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type="submit" value="Save" className="btn btn-block" disabled={!text.length} />
    </form>
  );
}

export default AddTask;