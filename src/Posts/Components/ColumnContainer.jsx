import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'

class ColumnContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numCols: this.props.numCols
        };
    }

    render() {

        return (
            <div className="col-xs-6">
            </div>
        );
    }
}

export default ColumnContainer;
