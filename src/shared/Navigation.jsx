import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from './Navigation.css'

class Navigation extends Component {
    render(){
        return(
            <nav role="navigation">
                <img className={styles.logoSm} src="http://www-cdr.stanford.edu/~petrie/blank.gif"/>
                <div className={styles.navLinkContainer}>
                    <Link className={styles.pageLink} to="/">
                        Home
                    </Link>
                    <Link className={styles.pageLink} to="/posts">
                        posts
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navigation;