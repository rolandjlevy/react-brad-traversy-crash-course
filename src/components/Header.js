import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({title}) => {
  const onClick = (e) => {
    console.log('Add button clicked')
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        color='green' 
        text='Add'
        onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }