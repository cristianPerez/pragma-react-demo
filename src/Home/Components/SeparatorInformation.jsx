import React, {Component} from 'react'
import styles from './SeparatorInformation.css'

class SepatatorInformation extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className={styles.separatorInformationContainer}>
                <div className={styles.containerBack}>
                    <div className="row">
                        <p className={styles.titleSeparator}>
                            You'll learn...
                        </p>
                        <div className="col-xs-12 col-sm-4">
                            <p className={styles.titleSeparator}>
                                React
                            </p>
                            <p className={styles.titleSeparator}>
                                ES6
                            </p>
                            <p className={styles.titleSeparator}>
                                Redux
                            </p>
                            <p className={styles.titleSeparator}>
                                Immutable.js
                            </p>
                            <p className={styles.titleSeparator}>
                                Webpack
                            </p>
                            <p className={styles.titleSeparator}>
                                React Router
                            </p>
                        </div>

                        <div className="col-xs-12 col-sm-4">
                            <p className={styles.titleSeparator}>
                                Universal React
                            </p>
                            <p className={styles.titleSeparator}>
                                Babel
                            </p>
                            <p className={styles.titleSeparator}>
                                Redux
                            </p>
                            <p className={styles.titleSeparator}>
                                Testing
                            </p>
                            <p className={styles.titleSeparator}>
                                React Native
                            </p>
                            <p className={styles.titleSeparator}>
                                React Router Redux
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <p className={styles.titleSeparator}>
                                Code Splitting
                            </p>
                            <p className={styles.titleSeparator}>
                                Hot Module Replacement
                            </p>
                            <p className={styles.titleSeparator}>
                                NPM
                            </p>
                            <p className={styles.titleSeparator}>
                                ESLint
                            </p>
                            <p className={styles.titleSeparator}>
                                Firebase
                            </p>
                            <p className={styles.titleSeparator}>
                                And More ...
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

}

export default SepatatorInformation;
