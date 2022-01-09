//redux store
import {createStore} from 'redux';
//redux type
const ADD = 'ADD';
const DELETE = 'DELETE';

//intitalState
const initalState = [
    {
        title:'TODO 1',
        id:1,
    }
]

//reducer
const todoReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD :
            return [
                ...state,
                {title:action.title, id:action.id}
            ]
        case DELETE :
            return state.filter( todo => todo.id !== action.id)
        default : return state;
    }
}


const store = createStore(todoReducer);

export default store;


