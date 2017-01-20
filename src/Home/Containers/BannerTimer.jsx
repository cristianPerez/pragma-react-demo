import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Timer from '../Components/Timer.jsx'

class BannerTimer extends Component {

    constructor(props){
        super(props);
        this.state = {
            //open: false
        }
    }

    render(){
        /*setTimeout(() => {
            ReactDOM.render(
                React.createElement(<h1>Hola</h1>, null),
                document.getElementById('imgTimer'));},1000);*/

        return(
            <section>
                <Timer start={Date.now()} />
            </section>
        );
    }



}

export default BannerTimer;