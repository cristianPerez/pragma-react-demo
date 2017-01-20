import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'

class GridPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            posts: this.props.posts,
            columns:this.props.columnCount,
            count: 0
        };
    }

    componentDidMount() {
        /*this.setState({
            loading: false,
        })*/
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.posts.map(function (post,index) {
                        let large = index === 0;
                        return <ImgPost
                            key={post.id}
                            picture={post.picture}
                            post_name={post.post_name}
                            type={large}
                        />
                    })
                }
            </div>
        );
    }
}

export default GridPost;
