import React, {Component} from 'react';
import SubHeader from '../Components/SubHeader.jsx'

class SubHeaderContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    render(){
        return(
            <SubHeader
                title={this.props.title}
            />
        );
    }
}

export default SubHeaderContent;