const ADD_MESSAGE = "ADD-MESSAGE"
const MESSAGE_CHANGE = "MESSAGE-CHANGE"

let dialogReducer = (state, action)=>{
	if(action.type == ADD_MESSAGE){
        let newMessage = {
            message:state.newMessageText,
            id:5
        }
        state.messageItems.push(newMessage)
    }
    else if(action.type == MESSAGE_CHANGE){
        state.newMessageText = action.text
	}
	return state
}
export default dialogReducer

export let addMessageAC = ()=>{
    return {
        type: "ADD-MESSAGE",
        id: 1
    }
}
export let onMessageChangeAC = (text)=>{
    return {
        type: "MESSAGE-CHANGE",
        text: text
    }
}
