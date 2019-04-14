import React, { Component } from 'react';
import '../App.css';
import { NavLink, Switch, Route} from "react-router-dom";
import Section from './Section';
import Authors from './Authors';
import SectionRender from './SectionRender';

class Blog extends Component {
    render() {
      return (
        <div>
            <div className = "title_bg">
                <div className = "blog_title">
                    <h1 className = "tit">
                        <NavLink className = "home" to="/section">My Blog</NavLink>
                    </h1> 
                    <span className = "Auth">
                        <NavLink className = "Nav" to="/authors">Authors: 123456</NavLink>
                    </span>
                </div>
            </div>
            <Switch>
                <Route exact path="/authors" component={Authors} />
                <Route exact path="/section" component={Section} />
                <Route path="/section/:id" component={SectionRender} />
            </Switch>
        </div>
      );
    }
}

export default Blog;