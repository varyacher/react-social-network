import React from 'react'
import './../profile.css'
import ava_min from '../../../img/profile-photo/elon_mini'
import Post from './post/Post'

function Posts() {
  return (
    <div className="posts">
        <input type="text" placeholder="enter the post" />
        <button> Add post</button>
        <Post message=":)"/>
        <Post message="text"/>
        <Post message="123"/>
        <Post message="Hi"/>
    </div>
  );
}

export default Posts;