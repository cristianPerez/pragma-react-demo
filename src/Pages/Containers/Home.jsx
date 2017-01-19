import React, {Component} from 'react';

import ContentHeader from './ContentHeader.jsx';
import Navigation from './Navigation.jsx'

class Home extends Component {
    render(){
        return(
            <section name="home">
                <h1>Home</h1>
                <ContentHeader title="Pragma Engineering" subtitle="Some random quote of the day - Donald Trump"/>
            </section>
        );
    }
}

export default Home;