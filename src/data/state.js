let state = {
    profilePage:{
        postsData:[
            {message:"Проверка связи - пост 1", id:1, likes:0},
            {message:"Список покупок: хлеб, яблоки 2кг, twitter", id:2, likes:8},
            {message:"Искусственный интеллект захватывает мир!!!!!", id:3, likes:6},
            {message:"Собираю команду для развития искусственного интеллекта.", id:4, likes:11},
        ],
    },
    dialogPage:{
        dialogNames:[
            {name:'Мария', id:1},
            {name:'Инакентий', id:2}, 
            {name:'Джон', id:3}, 
            {name:'Петя', id:4}
        ],
        messageItems:[
            {message:'Привет)))', id:1}, 
            {message:'Как дела?', id:2}, 
            {message:':)', id:3}, 
            {message:'3456', id:4}
        ]
    }
}
export default state