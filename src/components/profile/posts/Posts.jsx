import React from 'react'
import './../profile.css'
import ava_min from '../../../img/profile-photo/elon_mini'
import Post from './post/Post'


function Posts(props) {
  return (
    <div className="posts">
        <input type="text" placeholder="enter the post" />
        <button> Add post</button>
        {props.postsData.map((el)=><Post message={el.message} id={el.id} likes={el.likes}/>)}
    </div>
  );
}

export default Posts;

// В компоненте posts вынести данные в сторону в виде массива объектов. С помощью map() отрисовать все посты сразу
