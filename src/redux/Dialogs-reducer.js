const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Ilya' },
        { id: 2, name: 'Alexey' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Dmitry' },
        { id: 5, name: 'Andrew' }
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'I am awesome!' },
        { id: 3, message: 'What?' },
        { id: 4, message: 'How are you?' },
        { id: 5, message: 'It is beautiful' }
    ],
    newMessageBody: ""
};

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { 
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return { 
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
            default:
                return state;
}
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})  
export const updateNewMessageBodyCreator = (body) => 
({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })

export default DialogsReducer;