import React, { Component } from 'react';
import '../styles.css';

class Footer extends Component {
    filter_selection_all = () => {

    }
    filter_selection_active = () => {

    }
    filter_selection_completed = () => {

    }
    delete_completed = () => {

    }
    render() {
      return (
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total" id="todo__total"></div>
                    <ul className="todo-app__view-buttons">
                        <li><button onClick = {this.filter_selection_all} id="all">All</button></li>
                        <li><button onClick = {this.filter_selection_active} id="active">Active</button></li>
                        <li><button onClick = {this.filter_selection_completed} id="completed">Completed</button></li>
                    </ul>
                    <div className="todo-app__clean">
                        <button onClick={this.delete_completed}>Clear completed</button>
                    </div>
            </footer>
        );
    }
}

export default Footer;