import React from 'react'
import './../profile.css'
import ava_min from '../../../img/profile-photo/elon_mini.jpg'
import Post from './post/Post'
import {addPostAC, onPostChangeAC} from '../../../data/state.js'



let postText = React.createRef()



function Posts(props) {
  let addPost = ()=>{
    // props.addPost(postText.current.value)
    props.dispatch(addPostAC())
    postText.current.value = ""
  }
  let onPostChange = ()=>{
    // props.onPostChange(postText.current.value)
    props.dispatch(onPostChangeAC(postText.current.value))
  }
  return (
    <div className="posts">
        <input onChange={onPostChange} ref={postText} type="text" placeholder="enter the post" value={props.newPostText} />
        <button onClick={addPost}> Add post</button>
        {props.postsData.map((el)=><Post message={el.message} id={el.id} likes={el.likes}/>)}
    </div>
  );
}

export default Posts;


