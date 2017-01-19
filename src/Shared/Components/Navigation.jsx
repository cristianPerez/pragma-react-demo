import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from './Navigation.css'

function Navigation() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.lineTop}></div>
            <nav role="navigation" className={styles.navStyle}>

                <div className={styles.logoHeader}>
                    <img className={styles.logoSm}
                         src="https://s3-us-west-1.amazonaws.com/glanz-react/assets/logo2.png"/>
                </div>
                <div className={ styles.navLinkContainer }>
                    <Link className={styles.pageLink} to="/">
                        Home
                    </Link>
                    <Link className={styles.pageLink} to="/posts">
                        posts
                    </Link>

                </div>
            </nav>
        </div>

    );
}

export default Navigation;