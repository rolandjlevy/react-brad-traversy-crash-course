import React from 'react';

const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder="Add task" />
      </div>
      <div className='form-control form-control-check'>
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input type="checkbox" />
      </div>

      <input type="submit" value="Save" />
    </form>
  );
}

export default AddTask;