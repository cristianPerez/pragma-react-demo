import React, {Component} from 'react';
import {Link} from 'react-router';

class Posts extends Component {
    render(){
        return(
            <section name="posts">
                <h1>Posts</h1>
                <ContentHeader title="posts"/>
            </section>
        );
    }
}

export default Posts;