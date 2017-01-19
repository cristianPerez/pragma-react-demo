import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render(){
        return(
            <section name="home">
                <Link to="/posts">
                    posts
                </Link>
                <Link to="/news">
                    news
                </Link>
                <Link to="/projects">
                    projects
                </Link>
            </section>
        );
    }
}

export default Navigation;