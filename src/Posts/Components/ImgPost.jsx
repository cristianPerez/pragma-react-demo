import React from 'react'

/* Función pura - componentes puro solo de IU*/

import styles from './ImgPost.css'

function ImgPost(props) {
    return (
        <div className={styles.img-container}>
            <figure className="">
                <img className={styles.media-object} width={props.width} height={props.height} src={'http://lorempixel.com/600/' + props.height + '/technics/' + props.picture} />
            </figure>
            <div className={styles.caption-container} id="Title">
                <p className={styles.text-caption}>  {props.post_name}</p>
            </div>
        </div>
    );
}

export default ImgPost