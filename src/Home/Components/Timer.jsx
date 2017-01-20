import React, {Component} from 'react';
import styles from './Timer.css'

var Timer = React.createClass({

    getInitialState: function () {

        // This is called before our render function. The object that is
        // returned is assigned to this.state, so we can use it later.

        return {elapsed: 0};
    },

    componentDidMount: function () {

        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function () {

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    },

    tick: function () {

        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function () {

        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return (
            <article className={styles.bannerContainer}>
                <div className={styles.containerBack}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className={styles.textTimerContainer}>
                                <p className={styles.textTimer}><b>{seconds}</b></p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <p className={styles.textCenterTimer}>TIMER</p>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div id="imgTimer" className={styles.containerImage}>
                                <img className={styles.imgBanner}
                                     src="https://s3-us-west-1.amazonaws.com/glanz-react/assets/reactjs.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
});

export default Timer;
