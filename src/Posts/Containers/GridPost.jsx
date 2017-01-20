import React, {Component} from 'react';
import ImgPost from '../components/ImgPost.jsx'
import HalfSplitter from '../components/HalfSplitter.jsx'

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
        let rightContent = this.props.posts.filter((val,index) => {return index > 0});
        let leftContent = this.props.posts.filter((val,index) => {return index%5 == 0});
        return (
                <HalfSplitter
                    left={<ImgPost key={leftContent.id} picture={leftContent.picture} post_name={leftContent.post_name} type="large"/>}
                    right={
                        rightContent.map(function(post){
                        console.log(post.id);
                        return <ImgPost key={post.id} picture={post.picture} post_name={post.post_name} type="small"/>
                    })}
                />
        );
    }
}

export default GridPost;
