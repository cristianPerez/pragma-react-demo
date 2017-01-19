import React, {Component} from 'react';

import Header from '../../shared/Header.jsx';
import ContentHeader from './ContentHeader.jsx';
import GridPost from '../../Posts/Containers/GridPost.jsx'

let posts = [
    { id: 1, post_name: "Post 1", picture: "1", width: "100%", height: "145" },
    { id: 2, post_name: "Post 2", picture: "2", width: "100%", height: "145" },
    { id: 3, post_name: "Post 3", picture: "3", width: "100%", height: "145" },
    { id: 4, post_name: "Post 4", picture: "4", width: "100%", height: "145" },
    { id: 5, post_name: "Post 5", picture: "5", width: "100%", height: "145" },
    { id: 6, post_name: "Post 6", picture: "6", width: "100%", height: "145" },
    { id: 7, post_name: "Post 7", picture: "7", width: "100%", height: "145" },
    { id: 8, post_name: "Post 8", picture: "8", width: "100%", height: "145" }

]




class Posts extends Component {
    render(){
        return(

            <section name="posts">
                <Header/>
                <ContentHeader title="Los posts"/>
                <h1>Posts</h1>
                <GridPost  posts={ posts }/>
            </section>
        );
    }
}

export default Posts;