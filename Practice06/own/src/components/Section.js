import React, { Component } from 'react';
import '../App.css';

class Section extends Component {
    render() {
      return (
        <div className = "section_wrapper">
            <div className = "article_wrapper">
                <div>
                    <h2 className = "art_title">Article {this.props.id}</h2>
                </div>
                <hr/>
                <div className = "des_wrapper">
                    <img src = {this.props.img_src} className = "article_img" alt = "cool"></img>
                    <div className = "des">
                        {this.props.des}
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Section;