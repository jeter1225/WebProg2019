import React, { Component } from 'react';
import './App.css';

const src_img = [
  'https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
];

const des = ['kitty 1', 'kitty 2', 'kitty 3'];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className = "section_wrapper">
          <Section />
        </section>
      </div>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <div className = "article_wrapper">
        <div>
          <h2>{this.props.name}</h2>
        </div>
        <hr/>
        <div className = "des_wrapper">
          <img src = {this.props.source} className = "article_img"></img>
          <div className = "des">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className = "title_bg">
        <div className = "blog_title">
          <h1>My Blog</h1> 
        </div>
          
      </div>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <div>
        <Article name = "Article 1" source = {src_img[0]} description = {des[0]} />
        <Article name = "Article 2" source = {src_img[1]} description = {des[1]} />
        <Article name = "Article 3" source = {src_img[2]} description = {des[2]} />
      </div>
    );
  }
}



export default App;
