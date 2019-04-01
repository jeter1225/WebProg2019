import React from 'react';
import ReactDOM from 'react-dom';

import Item from '../components/Item';
import x from '../components//img/x.png';
import Input from '../components/Input';
import { isRegExp } from 'util';

let ListArray=[];
let counter=0;
class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
      // TODO
    };
  }

  handleInput = e => {
    if (e.key === "Enter"&&e.target.value!=="") {
      const value = e.target.value;
      ListArray.push({id: counter, name:value, completed: false});
      //console.log(ListArray)
      e.target.value = "";
      e.target.blur();
      this.setState({list:ListArray });
      counter+=1;
    }
  }



  render() {
    let list=this.state.list;
    return (
      
     <div  className="todo-app__root">
            <header className="todo-app__header todo-app__title" id="title">todos</header>
            <section className="todo-app__main">
              <Input onKeyPress={this.handleInput} />
            </section>
  
            <ul className="todo-app__list" id="todo-list">
            {
            list.map((todo) => {
              return (
               <Item value={todo.name} mark={todo.id} />
              );
            })
          }  
            </ul>
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todot-app__total"><span id="todo-count">{counter}</span> left</div>
                <ul className="todo-app__view-buttons">
                    <li> <button onclick="original()">all</button></li>
                    <li> <button onclick="active()">Active</button></li>
                    <li> <button onclick="done()">Completed</button></li>
                </ul>
                <div className="todo-app__clean"> <button onclick="clearComplete()">CLear Completed</button></div>
            </footer>
            <div className="clear"><button onclick="cleanAll()">delete all</button></div>
    </div>
    );
  }
}

export default ListApp;
