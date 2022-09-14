import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";
import SidebarReducer from "./Sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, how are you?', likesCount: 4 },
                { id: 2, message: 'it is my first post', likesCount: 15 },
                { id: 3, message: 'Wazzup', likesCount: 5 },
                { id: 4, message: 'Franklin?', likesCount: 83 },
            ],
            newPostText: 'Введите текст'
            
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Ilya' },
                { id: 2, name: 'Alexey' },
                { id: 3, name: 'Dima' },
                { id: 4, name: 'MALADOI' },
                { id: 5, name: 'XYN MAMNH' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'хуй тебе. Нужно?' },
                { id: 3, message: 'Dima' },
                { id: 4, message: 'How are you?' },
                { id: 5, message: 'Ебанько' }
            ],
            newMessageBody: ""
        },
        sidebar: {} 
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.updateNewPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;
