import React, { Component } from 'react';
import ImgPost from '../components/ImgPost.jsx'

/* Componentes contenedores que muestran puros internamente */
class DescriptionPost extends Component {
    constructor(props) {
        super(props);
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
    handleMouseEnter(event) {
        console.log(event.target)
    }
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="col-xs-12 col-sm-6">
                        <ImgPost
                            picture={this.props.picture}
                            width={this.props.width}
                            height={this.props.height}
                            post_name={this.props.post_name}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="img-caption-low">
                                    <ImgPost
                                        picture={this.props.picture}
                                        width={this.props.width}
                                        height='150'
                                        post_name={this.props.post_name}
                                    />
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <ImgPost
                                    picture={this.props.picture}
                                    width={this.props.width}
                                    height='150'
                                    post_name={this.props.post_name}
                                />
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <ImgPost
                                    picture={this.props.picture}
                                    width={this.props.width}
                                    height='150'
                                    post_name={this.props.post_name}
                                />
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <ImgPost
                                    picture={this.props.picture}
                                    width={this.props.width}
                                    height='150'
                                    post_name={this.props.post_name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DescriptionPost