import { createStore } from "redux"; //store를 사용하기 위해 import;

const log = console.log;
const abbBtn = document.getElementById('btn-add');
const input = document.querySelector('input');
const todoUl = document.querySelectorAll('.todo-list')[0];

log(abbBtn, input, todoUl);

//type 설정
const ADD = 'ADD';
const DELETE = 'DELETE';

const initalState = [];
//redux 적용

const addDispatch = (title) => {
  return {
    type:ADD,
    title,
  }
}
const deleteDispatch = (id) => {
  return {
    type:DELETE,
    id,
  }
}

const todoReducer = (state = initalState, action) => {
  switch(action.type){
    case ADD :
      return [
        ...state,
        {
          id:state.length,
          title:action.title,
        }
      ]
    case DELETE :
      return state.filter(item => item.id !== action.id);
    default : return state;
  }
}
const todoStore = createStore(todoReducer);

const onChnage = () => {
  const todo = todoStore.getState();
  todoUl.innerHTML ='';
  input.value = '';
  todo.map((item, idx) => {
    const li  = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-btn')
    deleteBtn.innerText = '❌';
    li.innerText = item.title;
    li.append(deleteBtn);
    deleteBtn.addEventListener('click',(e)=>todoDelete(e,item.id))
    todoUl.append(li);
  })
}
const todoAdd = () => {
  todoStore.dispatch(addDispatch(input.value))
}

const todoDelete = (e,idx) => {
  const pane = e.target.parentNode;
  pane.remove();
  todoStore.dispatch(deleteDispatch(idx))
}



todoStore.subscribe(onChnage);
abbBtn.addEventListener('click', todoAdd);


log(todoStore ,'todoStore')
