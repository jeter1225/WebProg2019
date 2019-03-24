import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Page extends Component {
  render(){
    return (
      <div>
        {this.props.header}
        {this.props.content}
        {this.props.footer}
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return (
      <h1> {this.props.name}'s Blog </h1>
    );
  }
}

class Content extends Component {
  render(){
    return (
      <div class='content'>
        <div class="main">
        {this.props.para.map(ele => (
          <div class="article">
            <h3> {ele.title} </h3>
            <p> {ele.content} </p>
          </div>
        )
        )}
        </div>
        <div class='sidebar'>
          sidebar
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render(){
    return (
      <div class="footer">
        Welcome
      </div>
    );
  }
}
export {
  Header,
  Content,
  Page,
  Footer,
}
