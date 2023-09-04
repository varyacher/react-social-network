const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"
const ADD_MESSAGE = "ADD-MESSAGE"
const MESSAGE_CHANGE = "MESSAGE-CHANGE"
let store = {
    _state:{
        profilePage:{
            postsData:[
                {message:"Собираю команду для развития искусственного интеллекта.", id:1, likes:11},
                {message:"Искусственный интеллект захватывает мир!!!!!", id:2, likes:8},
                {message:"Список покупок: хлеб, яблоки 2кг, twitter", id:3, likes:6},
                {message:"Проверка связи - пост 1", id:4, likes:0}
            ],
            newPostText:"hello"
        },
        dialogPage:{
            dialogNames:[
                {name:'Мария', id:1},
                {name:'Инакентий', id:2}, 
                {name:'Джон', id:3}, 
                {name:'Петя', id:4},
            ],
            messageItems:[
                {message:'Привет)))', id:1}, 
                {message:'Как дела?', id:2}, 
                {message:':)', id:3}, 
                {message:'Го гулять', id:4}
            ],
            newMessageText:""
        },
        friendsPage:{
            friendData:[
                {name:'Маша', id:1, avatar: 'elon_mini.jpg'},
                {name:'Тиша', id:2, avatar: 'elon_mini.jpg'},
                {name:'Таня', id:3, avatar: 'elon_mini.jpg'}
            ]
        }
    },

    dispatch(action){
        if(action.type == ADD_POST){
            let newPost = {
                message:this._state.profilePage.newPostText,
                id:5,
                likes:10
            }
            this._state.profilePage.postsData.unshift(newPost)
            this._state.profilePage.newPostText = ""
            this.rerenderTree(this._state)
        }
        else if(action.type == POST_CHANGE){
            this._state.profilePage.newPostText = action.text
            this.rerenderTree(this._state)
        }
        else if(action.type == ADD_MESSAGE){
            let newMessage = {
                message:this._state.dialogPage.newMessageText,
                id:5
            }
            this._state.dialogPage.messageItems.push(newMessage)
            this.rerenderTree(this._state)
        }
        else if(action.type == MESSAGE_CHANGE){
            this._state.dialogPage.newMessageText = action.text
            this.rerenderTree(this._state)
        }
    },
    // addPost(postText){
        
    //     // console.log(state)
    // },

    // addMessage(messageText){
        
        // console.log(state)
    // },

    // onPostChange(text){
        
    // },
    // onMessageChange(text){
    //     this._state.dialogPage.newMessageText = text
    //     this.rerenderTree(this._state)
    // },

    rerenderTree(){
        console.log("function")
    },
    subscribe(observer){
        this.rerenderTree = observer
    },
    getState(){
        return this._state
    }
}
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

export default store



