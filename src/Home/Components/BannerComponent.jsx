import React, {Component} from 'react'
import styles from './BannerComponent.css'
import {Link} from 'react-router';

class BannerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1,
        });
    }


    render() {
        return (
            <article className={styles.bannerContainer}>
                <div className={styles.containerBack}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <img className={styles.imgBanner}
                                 src="https://s3-us-west-1.amazonaws.com/glanz-react/assets/morral.png"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className={styles.textAlignCenter}>
                                <p className={styles.countNumber}>
                                    {this.state.count}
                                </p>
                                <div className={styles.btnBlue} onClick={this.handleClick}>
                                    ADD
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className={styles.textContent}>
                                <p className={styles.textTitleBanner}>
                                    REACT FOR <br /> BEGINNERS
                                </p>
                                <p className={styles.entradilla}>
                                    Start with Events
                                </p>
                                <Link className={styles.btnPost} to="/posts">
                                    POSTS
                                </Link>
                                <div className={styles.btnPost} onClick={this.handleClick}>
                                    CLICK EVENT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }


}

export default BannerComponent;
