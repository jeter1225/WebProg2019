import React from 'react';
import PropTypes from 'prop-types';
import x from './img/x.png';


class Item extends React.Component {
 
  render(){

  return (
  <li className="todo-app__item">
    <div className="todo-app__checkbox">
      <input id={this.props.mark} type="checkbox" ></input>
      <label htmlFor={this.props.mark}></label>
    </div>
    <h1 className="todo-app__item-detail">{this.props.value}</h1>
    <img src={x} className="todo-app__item-x"></img>
   
  </li>
  );
};
};



export default Item;
