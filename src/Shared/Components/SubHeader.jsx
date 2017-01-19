import React, {Component} from 'react';

import styles from './SubHeader.css'

function SubHeader(props) {
    return (
        <div className={styles.subHeaderContainer}>
            <p className={styles.titleSubHeader}>{props.title}</p>
        </div>
    );
}

export default SubHeader;