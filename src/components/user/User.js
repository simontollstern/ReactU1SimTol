import React from 'react';
import style from './User.module.css';

// The list items containing the user's names
// This may be an overcomplicated solution, but I couldn't get it to work with
// CSS Modules any other way (I suppose come conditional could be used)
function User(props){
  if(props.colorToggled){
    return <li className={[style.user, style.green].join(' ')}>{props.name}</li>
  }
  return <li className={[style.user, style.red].join(' ')}>{props.name}</li>
}

export default User;
