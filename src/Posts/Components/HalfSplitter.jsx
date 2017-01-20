import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'

function HalfSplitter(props){
    return(
        <div>
            <div className="col-xs-6">
                {props.left}
            </div>
            <div className="col-xs-6">
                {props.right}
            </div>
        </div>
    )
}

export default HalfSplitter;
