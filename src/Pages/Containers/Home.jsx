import React, {Component} from 'react';
import {Link} from 'react-router';

import ContentHeader from './ContentHeader.jsx';
import Navigation from './Navigation.jsx'

class Home extends Component {
    render(){
        return(
            <section name="home">
                <h1>Home</h1>
                <Navigation/>
                <ContentHeader title="Pragma Engineering" subtitle="Some random quote of the day - Donald Trump"/>
            </section>
        );
    }
}

export default Home;