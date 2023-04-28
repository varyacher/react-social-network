import React from 'react'
import './../profile.css'
import ava_min from '../../../img/profile-photo/elon_mini'
import Post from './post/Post'

function Posts() {
  return (
    <div className="posts">
        <input type="text" placeholder="enter the post" />
        <button> Add post</button>
        <Post message="Собираю команду для развития искусственного интеллекта."/>
        <Post message="Искусственный интеллект захватывает мир!!!!!"/>
        <Post message="Список покупок: хлеб, яблоки 2кг, twitter"/>
        <Post message="Проверка связи - пост 1"/>
    </div>
  );
}

export default Posts;