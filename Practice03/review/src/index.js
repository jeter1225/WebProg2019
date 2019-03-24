import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header, Content, Page, Footer} from './App';
import * as serviceWorker from './serviceWorker';

var para = [
  {
    title: "Story",
    content: "blablabla...",
  },
  {
    title: "Web programming",
    content: "Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg\
Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg\
Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg\
Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg Omg",
  },
  {
    title: "I want to sleep",
    content: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz\
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz\
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz\
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz\
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz\
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz\
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
  }
];
// var para = ["1", "w", "haha"];
var header = <Header name = "Hsiang" />
var content = <Content para = {para} />
var footer = <Footer />

var page = <Page header={header} content={content} footer={footer}/>

ReactDOM.render(page, document.getElementById('root'));
// ReactDOM.render(content, header);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
