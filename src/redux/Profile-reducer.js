const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState =  {
    posts: [
        { id: 1, message: 'Hello, how are you?', likesCount: 4 },
        { id: 2, message: 'it is my first post', likesCount: 15 },
        { id: 3, message: 'Wazzup', likesCount: 5 },
        { id: 4, message: 'Franklin?', likesCount: 83 },
    ],
    newPostText: 'Введите текст'
};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})  
export const updateNewPostActionCreator = (text) => 
({ type: 'UPDATE_NEW_POST_TEXT', newText: text })

export default ProfileReducer;