import React from 'react'

/* Función pura - componentes puro solo de IU*/

import styles from './ImgPost.css'

function ImgPost(props) {
    return (
        <div className={styles.imgcontainer+' '+styles.imgpostcontainer}>
            <figure className={styles.imgpostcontainer}>
                <img src={'http://lorempixel.com/600/' + props.height + '/technics/'} />
            </figure>
            <div className={styles.captioncontainer} id="Title">
                <p className={styles.textcaption}>{props.post_name}</p>
            </div>
        </div>
    );
}

export default ImgPost