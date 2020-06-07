import { FETCH_POSTS, NEW_POST } from './types';

// 分发操作
export const fetchPosts = () => dispatch => {
  // 箭头函数柯里化
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
  // fetch("https://jsonplaceholder.typicode.com/posts")//默认get方法
  // .then(res => res.json()).then(res => {
  //   this.setState({
  //     posts: res
  //   })
  // })
}


export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>{
  console.log(post);
      dispatch({
        type: NEW_POST,
        payload: post
      })}
    )
  // fetch("https://jsonplaceholder.typicode.com/posts",{
  //   method:"POST",
  //   headers:{
  //     "content-type":"application/json"
  //   },
  //   body: JSON.stringify(post)//将 JavaScript 值转换为 JSON 字符串
  // }).then(res => res.json()).then(res => {
  //   console.log(res)
  // })
}

