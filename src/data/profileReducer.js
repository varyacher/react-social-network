const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"

let profileReducer = (action, state)=>{
	if(action.type == ADD_POST){
        let newPost = {
            message:state.newPostText,
            id:5,
            likes:10
        }
        state.postsData.unshift(newPost)
        state.newPostText = ""
    }
    else if(action.type == POST_CHANGE){
        state.newPostText = action.text
    }
    return state
}
export default profileReducer


export let addPostAC = ()=>{
  return {
    type: "ADD-POST",
    id: 1
  }
} 
export let onPostChangeAC = (text)=>{
  return {
    type: "POST-CHANGE",
    text: text
  }
}