import React from 'react'
import './profile.css'
import ava from '../../img/profile-photo/elon.jpg'
import ava_min from '../../img/profile-photo/elon_mini.jpg'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div className="profile">
        <ProfileInfo/>
        <Posts 
        postsData={props.profilePage.postsData} 
        addPost={props.addPost} 
        newPostText={props.newPostText} 
        onPostChange={props.onPostChange}
        />
    </div>
  );
}

export default Profile;



// Добавить в описание профиля статус, город проживания + css
