import React, {Component} from 'react';

import Navigation from './Navigation.jsx';

import styles from './Header.css';

class Header extends Component {
    render(){
        return(
            <header>

                <Navigation/>
            </header>
        );
    }
}

export default Header;