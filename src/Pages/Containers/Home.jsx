import React, {Component} from 'react';
import Header from '../../Shared/Containers/Header.jsx';
import SubHeaderContent from '../../Shared/Containers/SubHeaderContent.jsx'
import BannerEvents from '../../Home/Containers/BannerEvents.jsx'
import BannerTimer from '../../Home/Containers/BannerTimer.jsx'

class Home extends Component {
    render(){
        return(
            <section name="home">
                <Header/>
                <SubHeaderContent title="REACT"/>
                <BannerEvents/>
                <BannerTimer/>
            </section>
        );
    }
}

export default Home;