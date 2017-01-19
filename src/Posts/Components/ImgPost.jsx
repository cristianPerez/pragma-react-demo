import React from 'react'
import cx from 'classnames'

/* Función pura - componentes puro solo de IU*/

import styles from './ImgPost.css'

function ImgPost(props) {
    return (
        <div className={cx("col-xs-6",{"col-xs-12":props.type})}>
            <div className={styles.margin_bot}>
                <div className={styles.imgcontainer}>
                    <figure className={styles.imgpostcontainer}>
                        <img className={styles.mediaobject} width={props.width} height={props.height}
                             src={'http://lorempixel.com/600/200/technics/'+props.picture}/>
                    </figure>
                    <div className={styles.captioncontainer} id="Title">
                        <p className={styles.textcaption}>  {props.post_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgPost