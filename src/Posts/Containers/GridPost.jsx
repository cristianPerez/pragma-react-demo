import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'
import styles from './DescriptionPost.css'

class GridPost extends Component {

    constructor(props){
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
        console.log('Aca se deberia hacer la petición a la API');
        console.log('hay ' + this.props.posts.length + ' posts')
    }

    render() {
        return (
        <div className="row">
            {this.state.loading && (
                <h2>loading posts...</h2>
            )}
            <div className="col-xs-12 col-sm-3">
                <div className={styles.margin_bot}>
                    {this.state.posts.map((post) => {
                        console.log(post.id + " ---  "+ post.post_name + "---" + post.picture);
                        <ImgPost id={post.id} post_name={post.name} picture={post.picture} width={post.width} height={post.height} {...post}/>
                    })}
                </div>
            </div>
        </div>
        );
    }
}

export default GridPost;