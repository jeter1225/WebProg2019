import React, { Component } from 'react';
import '../styles.css';
import x from '../img/x.png'

class List extends Component {
    render() {
        return (
            <li className = "todo-app__item">
                <div className = "todo-app__checkbox">
                    <input type = "checkbox" id = {this.props.id} onClick = {this.props.select_item}></input>
                    <label htmlFor = {this.props.id}></label>
                </div>
                <h1 className = "todo-app__item-detail">{this.props.things}</h1>
                <img src = {x} className = "todo-app__item-x" onClick = {this.props.delete_item} id = {this.props.id}></img>
            </li>
        );
    }
}


  export default List;