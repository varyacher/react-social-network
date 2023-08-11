let state = {
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
        ]
    },
    friendsPage:{
        friendData:[
            {name:'Маша', id:1, avatar: 'elon_mini.jpg'},
            {name:'Тиша', id:2, avatar: 'elon_mini.jpg'},
            {name:'Таня', id:3, avatar: 'elon_mini.jpg'}
        ]
    }
}

export default state
window.state = state

export let addPost = (postText)=>{
    let newPost = {
        message:postText,
        id:5,
        likes:10
    }
    state.profilePage.postsData.unshift(newPost)
    state.profilePage.newPostText = ""
    rerenderTree(state)
    // console.log(state)
}

export let addMessage = (messageText)=>{
    let newMessage = {
        message:messageText,
        id:5
    }
    state.dialogPage.messageItems.push(newMessage)
    rerenderTree(state)
    // console.log(state)
}

export let onPostChange = (text)=>{
    state.profilePage.newPostText = text
    rerenderTree(state)
    console.log(text)
}
export let onMessageChange = (text)=>{
    state.dialogPage.newMessageText = text
    rerenderTree(state)
}

let rerenderTree = ()=>{
    console.log("function")
}
export let subscribe = (observer)=>{
    rerenderTree = observer
}



