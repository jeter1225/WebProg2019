import React from 'react';

export default ({pressed}) => {
  return <input type="text" 
                placeholder="What needs to be done?"
                onKeyPress={pressed}
                className="todo-app__input" id="todo__input"
         />;
}