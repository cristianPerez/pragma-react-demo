import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'
import styles from './DescriptionPost.css'

class GridPost extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            posts: this.props.posts,
            count: 0
        };
    }

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    render() {
        return (
        <div className="row">

            {this.state.loading && (
                <h2>loading posts...</h2>
            )}

            <div className="col-xs-12">
                <div className={styles.margin_bot}>
                    {
                        this.state.posts.map(function (post) {
                            return <ImgPost
                                key={post.id}
                                picture={post.picture}
                                post_name={post.post_name}
                                width={post.width}
                                height={post.height}/>
                        })
                    }
                </div>
            </div>
        </div>
        );
    }
}

export default GridPost;