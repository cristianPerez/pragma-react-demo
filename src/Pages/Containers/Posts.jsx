import React, {Component} from 'react';

import ContentHeader from './ContentHeader.jsx';
import Navigation from './Navigation.jsx';

class Posts extends Component {
    render(){
        return(
            <section name="posts">
                <Navigation/>
                <h1>Posts</h1>
                <ContentHeader title="posts"/>
            </section>
        );
    }
}

export default Posts;