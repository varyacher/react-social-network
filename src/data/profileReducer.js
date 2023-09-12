const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"

let profileReducer = (state, action)=>{
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

let add = (a, b = 0)=>{
	return a + b
}
add(5)