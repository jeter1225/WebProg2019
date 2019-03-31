import React, { Component } from 'react';
import '../styles.css';
import List from './List';
import Header from './Header';
import Footer from './Footer';
import Input from '../components/Input'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0, list: [] };
        this.bi_list = [];
    }
    todo_LIST = todo => this.setState(() => ({ things: todo }));
    handleInput = e => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            const value = e.target.value.trim();
            const new_item = {node: <List things = {value} id = {this.state.id} delete_item = {this.delete_item} />}
            this.bi_list.push(this.state.id);
            this.setState(state => ({id: state.id + 1}));
            this.setState(state => ({list: state.list.concat([new_item])}))
            e.target.value = "";
        }
    };

    select_item = () => {

    };

    delete_item = e => {
        const index = this.bi_list.indexOf(parseInt(e.target.id));
        this.setState(state => (state.list.splice(index,1)));
        this.bi_list.splice(index, 1);
    };

    render() {
        return (
            <div className = "todo-app__root">
                <Header />
                <section className = "todo-app__main">
                    <Input pressed = {this.handleInput} />
                    <ul className="todo-app__list" id="todo__list">
                        {this.state.list.map(function(item, i){
                            return <div key = {i}>{item.node}</div>
                        })}
                    </ul>
                </section>
                <Footer />
            </div>
            
        );
    }
}

export default Todos;