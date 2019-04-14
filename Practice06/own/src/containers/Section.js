import React, { Component } from 'react';
import '../App.css';
import { NavLink} from "react-router-dom";


class Section extends Component {
    render() {
        const src_img = [
            'https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        ];
        
        const des = ['kitty 1', 'kitty 2', 'kitty 3'];
        const ids = ['0', '1', '2'];
        const arts = ids.map((i, index) => (
            <div className = "article_wrapper" key={index}>
                <div>
                    <h2>
                        <NavLink className = "art_tit" to = {"/section/" + i} >Article {i}</NavLink>
                    </h2>
                </div>
                <hr/>
                <div className = "des_wrapper">
                    <img src = {src_img[i]} className = "article_img" alt = {"photo" + i}></img>
                    <div className = "des">
                        {des[i]}
                    </div>
                </div>
            </div>
        ))
        return (
            <div className = "section_wrapper">
                {arts}
            </div>
        );
    }
}

export default Section;
  