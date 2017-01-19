import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from './Navigation.css'

class Navigation extends Component {
    render(){
        return(
            <nav className="navContainer" role="navigation">
                <img className={styles.logoSm}/>
                <Link className={styles.pageLink} to="/">
                    Home
                </Link>
                <Link className={styles.pageLink} to="/posts">
                    posts
                </Link>
            </nav>
        );
    }
}

export default Navigation;