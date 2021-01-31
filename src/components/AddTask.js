import React, { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  return (
    <form className='add-form'>
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
          onClick={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
}

export default AddTask;