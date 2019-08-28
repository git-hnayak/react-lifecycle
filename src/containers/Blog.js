import React, { Component } from 'react';
import NewPost from './NewPost';
import Post from '../components/Post';
import './Blog.css';

class Blog extends Component {

    constructor() {
        super();
        this.someData = "some inital data";
        console.log(this.someData);
    }

    state = {
        posts: [],
        selectedPostId: null,
        selectedPostDetails: null
    }

    //(Mounting Phase): this method is only called once in a life of a component, and this is right before it is initially.
    componentWillMount() {
        console.log('Component will mount-Blog');
    }

    //(Mounting Phase): Whenever this method is called, React has already rendered our component and put it into the DOM.
    componentDidMount() {
        console.log('Component did mount-Blog');
    }

    //(Update Phase): By default, this method is not implemented, so every update of state or props causes a render, even if the props didn’t change. However, if you want to avoid possible unnecessary renders, you could handle this here. Returning false means, that React will not execute componentWillUpdate(), render() and componentDidUpdate().
    shouldComponentUpdate(nextState, nextProps) {
        console.log('Should Component update-Blog');
        console.log("nextState - shouldComponentUpdate - Blog", nextState);
        console.log("nextProps - shouldComponentUpdate - Blog", nextProps);
        return true;
    }

    //(Update Phase): This method is invoked right before rendering. Like shouldComponentUpdate, it is called whenever new props are passed to the component, or the state is changed.
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update-Blog');
        console.log("nextState - componentWillUpdate - Blog", nextState);
        console.log("nextProps - componentWillUpdate - Blog", nextProps);
    }

    //(Update Phase): Everything went well, and React updated our component. Directly after rendering
    componentDidUpdate(prevProps, prevState){
        console.log('Component did update-Blog');
    }

    addPosthandler = (postData) => {
        this.setState({
            //use concat instead push method to update array immutably. (array concat() method does not change the existing arrays, but instead returns a new array.)
            posts: this.state.posts.concat(postData) 
        })
    }

    updatePosthandler = (postData) => {
        //Updating immutably
        const posts = this.state.posts.map(post => {
            if (post.id == postData.id) {
                post = postData
            }
            return post
        });

        this.setState({
            posts,
            selectedPostDetails: null
        })

    }

    deletePostHandler = (postId) => {
        //removing elements from array in immutable way by using array filter() method
        const filteredPost = this.state.posts.filter(post => {
            return post.id !== postId
        });

        this.setState({
            posts: filteredPost
        })
    }

    editPostHandler = (postData) => {
        this.setState({
            selectedPostDetails: postData
        })
    }

    render() {
        console.log("Rendering - Blog");
        let postList = null;
        if (this.state.posts.length > 0) {
            postList = (
                <ul>
                    {this.state.posts.map(post => {
                        return <Post key={post.id} postData={post} deletPost={this.deletePostHandler} editPost={this.editPostHandler}/>
                    })}
                </ul>
            )
        }

        return (
            <div>
                <div className="Blog">
                    <div>
                        <NewPost addPost={this.addPosthandler} updatePost={this.updatePosthandler} postDetails={this.state.selectedPostDetails}/>
                    </div>
                    <div className="post-list">
                        {postList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;