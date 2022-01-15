//redux store
import {createStore} from 'redux';
//redux type
const ADD = 'ADD';
const DELETE = 'DELETE';

export const addTodo = (title) => {
    return {
        type:ADD,
        title,
    }
}
export const deleteTodo = (id) => {
    return {
        type:DELETE,
        id
    }
}
//intitalState
const initalState = [
    {
        title:'TODO 1',
        id:0,
    }
]

//reducer
const todoReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD :
            return [
                ...state,
                {title:action.title, id:state.length}
            ]
        case DELETE :
            return state.filter( todo => todo.id !== action.id)
        default : return state;
    }
}


const store = createStore(todoReducer);

export default store;


