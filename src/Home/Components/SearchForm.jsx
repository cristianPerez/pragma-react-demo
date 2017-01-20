import React, {Component} from 'react';
import styles from './SearchForm.css'

var SearchForm = React.createClass({

    getInitialState: function () {
        return {searchString: ''};
    },

    handleChange: function (e) {

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString: e.target.value});
    },

    render: function () {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if (searchString.length > 0) {

            // We are searching. Filter the results.

            libraries = libraries.filter(function (l) {
                return l.name.toLowerCase().match(searchString);
            });

        }

        return (
            <article className={styles.separatorInformationContainer}>
                <div className={styles.containerBack}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <p className={styles.titleSearchInformation}>
                                REAL TIME <br /> <b>SEARCH</b>
                            </p>
                            <div className={styles.ideaImageContainer}>
                                <img src="https://s3-us-west-1.amazonaws.com/glanz-react/assets/idea.png" className={styles.imagenIdea} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div>
                                <input type="text" value={this.state.searchString} onChange={this.handleChange}
                                       placeholder="Type here"/>
                                <ul>
                                    { libraries.map(function (l) {
                                        return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                                    }) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );

    }
});


export default SearchForm;