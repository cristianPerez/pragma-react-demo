import React, {Component} from 'react';
import styles from './HalfSplitter.css'

function HalfSplitter(props) {
    return (
        <div className={styles.containerBack}>
            <div className="row">
                <div className="col-xs-6">
                    <div className="row">
                        {props.left}
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="row">
                        {props.right}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HalfSplitter;
