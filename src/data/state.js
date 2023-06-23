let state = {
    profilePage:{
        postsData:[
            {message:"Проверка связи - пост 1", id:1, likes:0},
            {message:"Список покупок: хлеб, яблоки 2кг, twitter", id:2, likes:8},
            {message:"Искусственный интеллект захватывает мир!!!!!", id:3, likes:6},
            {message:"Собираю команду для развития искусственного интеллекта.", id:4, likes:11}
        ]
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
            {message:'3456', id:4}
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

export let addPost = (postText)=>{
    let newPost = {
        message:{postText},
        id:5,
        likes:10
    }
    state.profilePage.postsData.push(newPost)
    console.log(state)
}


export default state

// 1. Cоздаем реф
// 2. Создаем функцию, которую будет вызывать кнопка
// 3. Создаем функцию внутри state.js которая будет пушить в массив данные
// 4. Прокидываем ее до компоненты
// 5. current.value нашего рефа будет тем, что приходит в нашу функцию
