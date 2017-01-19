import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'

class GridPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            posts: this.props.posts,
        };
    }

    componentDidMount() {
        //const posts = await api.posts.getList(this.state.page);

        this.setState({
            //posts,
            //page: this.state.page + 1,
            loading: false,
        })
    }

    render() {
        return (
            <div className="row">
                {this.state.loading && (
                    <h2>loading posts...</h2>
                )}
                {
                    this.state.posts.map(function (post) {
                        return <ImgPost
                            key={post.id}
                            picture={post.picture}
                            post_name={post.post_name}
                            width={post.width}
                            height={post.height}
                            classOther={post.class_other}
                        />
                    })
                }
            </div>
        );
    }
}

export default GridPost;