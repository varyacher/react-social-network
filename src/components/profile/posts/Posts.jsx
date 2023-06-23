import React from 'react'
import './../profile.css'
import ava_min from '../../../img/profile-photo/elon_mini.jpg'
import Post from './post/Post'

let postText = React.createRef()

function Posts(props) {
  let addPost = ()=>{
    props.addPost(postText.current.value)
  }
  return (
    <div className="posts">
        <input ref={postText} type="text" placeholder="enter the post" />
        <button onClick={addPost}> Add post</button>
        {props.postsData.map((el)=><Post message={el.message} id={el.id} likes={el.likes}/>)}
    </div>
  );
}

export default Posts;

// В компоненте posts вынести данные в сторону в виде массива объектов. С помощью map() отрисовать все посты сразу
