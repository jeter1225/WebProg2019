import React, { Component } from 'react';
import '../App.css';

class Authors extends Component {
    render() {
      return (
        <div className = "section_wrapper">
            <div className = "article_wrapper">
                <div>
                    <h2 className = "art_title">Something about me</h2>
                </div>
                <hr/>
                <div className = "des_wrapper">
                    <img src = "https://mocah.org/uploads/posts/132009-mont-blanc-autumn-lake-white-mountain-alps-hd-5k.jpg" className = "article_img" alt = "cool"></img>
                    <div className = "des">
                        Hi, I'm 123456
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Authors;