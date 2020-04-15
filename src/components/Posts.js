import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'
import PostForm from './PostForm'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()//触发操作
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        <PostForm></PostForm>
        {postItems}
      </div>
    )
  }
}

// 建立一个从（外部的）state对象到(UI 组件的)props对象的映射关系
const mapStateToProps = state => ({//将状态转换为属性
  posts: state.posts.items,
  newPost: state.posts.item
})

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
















