import React, {Component} from 'react';

import Header from '../../shared/Header.jsx';
import ContentHeader from './ContentHeader.jsx';
import DescriptionPost from '../../Posts/Containers/DescriptionPost.jsx'

class Posts extends Component {
    render(){
        return(
            <section name="posts">
                <Header/>
                <ContentHeader title="Los posts"/>
                <h1>Posts</h1>
                <DescriptionPost post_name="Pragma" picture="2" width="100%" height="320"/>
            </section>
        );
    }
}

export default Posts;