import React, {Component} from 'react';
import BannerComponent from '../Components/BannerComponent.jsx'

class BannerEvents extends Component {

    constructor(props){
        super(props);
        this.state = {
            //open: false
        }
    }

    render(){
        return(
            <section>
                <BannerComponent />
            </section>
        );
    }
}

export default BannerEvents;