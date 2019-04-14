import React, { Component } from 'react';
import '../App.css';
import Section from '../components/Section'


class SectionRender extends Component {
    render() {
        const src_img = [
            'https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        ];
        
        const des = ['kitty 1', 'kitty 2', 'kitty 3'];
        const ids = ['0', '1', '2'];
        const {id} = this.props.match.params;
        return id && ids.includes(id) ? (
                <Section id={id} img_src = {src_img[id]} des = {des[id]}/>
            ) : (
            <div>
                <h3>Error: Post #{id} NOT FOUND</h3>
            </div>
        );
    }
}

export default SectionRender;
  