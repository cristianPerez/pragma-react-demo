import React, {Component} from 'react';
import Header from '../../Shared/Containers/Header.jsx';
import SubHeaderContent from '../../Shared/Containers/SubHeaderContent.jsx'
import BannerEvents from '../../Home/Containers/BannerEvents.jsx'
import BannerTimer from '../../Home/Containers/BannerTimer.jsx'
import SepatatorInformation from '../../Home/Components/SeparatorInformation.jsx'
import SeparatorGreen from '../../Home/Components/SeparatorGreen.jsx'
import SearchForm from '../../Home/Components/SearchForm.jsx'

var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},

];


class Home extends Component {
    render(){
        return(
            <section name="home">
                <Header/>
                <SubHeaderContent title="REACT"/>
                <BannerEvents/>
                <SepatatorInformation/>
                <BannerTimer/>
                <SeparatorGreen/>
                <SearchForm items={ libraries } />
            </section>
        );
    }
}

export default Home;