import React, {Component} from 'react';
import {Link} from 'react-router';

class ContentHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    render(){
        return(
            <Header
                title={this.props.title}
                subtitle={this.props.subtitle}
            />
        );
    }
}

function Header(props){
    const title = props.title;
    const subtitle = props.subtitle;
    return(
        <section name="content-header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </section>
    )
}

export default ContentHeader;