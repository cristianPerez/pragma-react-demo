import React, {Component} from 'react';

import Header from '../../shared/Header.jsx';

class Home extends Component {
    render(){
        return(
            <section name="home">
                <Header/>
                <h1>Home</h1>
            </section>
        );
    }
}

export default Home;