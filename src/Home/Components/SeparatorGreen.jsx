import React, {Component} from 'react'
import styles from './SeparatorGreen.css'

class SeparatorGreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className={styles.separatorInformationContainer}>
                <div className={styles.containerBack}>
                    <div className="row">
                        <p className={styles.titleSeparator}>
                            And More ...
                        </p>
                    </div>
                </div>
            </article>
        );
    }

}

export default SeparatorGreen;
