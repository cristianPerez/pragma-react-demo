import React, {Component} from 'react';

import Header from '../../Shared/Containers/Header.jsx';
import SubHeaderContent from '../../Shared/Containers/SubHeaderContent.jsx';
import GridPost from '../../Posts/Containers/GridPost.jsx'

let posts = [
    { id: 1, post_name: "Post 1", picture: "1", width: "100%"},
    { id: 2, post_name: "Post 2", picture: "2", width: "100%"},
    { id: 3, post_name: "Post 3", picture: "3", width: "100%"},
    { id: 4, post_name: "Post 4", picture: "4", width: "100%"},
    { id: 5, post_name: "Post 5", picture: "5", width: "100%"},
    { id: 6, post_name: "Post 6", picture: "6", width: "100%"},
    { id: 7, post_name: "Post 7", picture: "7", width: "100%"},
    { id: 8, post_name: "Post 8", picture: "8", width: "100%"},
    { id:  9, post_name: "Post  9", picture: " 2", width: "100%"},
    { id: 10, post_name: "Post 10", picture: "3", width: "100%"},
    { id: 11, post_name: "Post 11", picture: "4", width: "100%"},
    { id: 12, post_name: "Post 12", picture: "7", width: "100%"},
    { id: 13, post_name: "Post 13", picture: "1", width: "100%"},
    { id: 14, post_name: "Post 14", picture: "2", width: "100%"}
]


class Posts extends Component {
    render(){
        return(
            <section name="posts">
                <Header/>
                <SubHeaderContent title="Ingenieria Pragma"/>
                <GridPost  posts={ posts }/>
            </section>
        );
    }
}

export default Posts;