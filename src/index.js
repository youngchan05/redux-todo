import { createStore } from "redux"; //store를 사용하기 위해 import;

const log = console.log;
const abbBtn = document.getElementById('btn-add');
const input = document.querySelector('input');
const todoUl = document.querySelectorAll('.todo-list')[0];

log(abbBtn, input, todoUl);

const ADD = 'ADD';
const DELETE = 'DELETE';
const initalState = [];
//redux 적용

const todoReducer = (state = initalState, action) => {
  log(state,'state',action ,'action')
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
const onChnage = () => {
  const todo = todoStore.getState();
  const li  = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('remove-btn')
  deleteBtn.innerText = '❌';
  todo.map((item, idx) => {
    li.innerText = item.title;
    li.append(deleteBtn);
    deleteBtn.addEventListener('click',(e)=> todoDelete(e,idx))
    todoUl.append(li);
  })
}
const todoStore = createStore(todoReducer);
const todoAdd = () => {
  todoStore.dispatch({
    type:ADD,
    title:input.value,
  })
}

const todoDelete = (e, idx) => {
  if(e.target.className === 'remove-btn'){
    const pane = e.target.parentNode;
    pane.remove();
    todoStore.dispatch({
      type:DELETE,
      id:idx
    })
  }
}



todoStore.subscribe(onChnage);
abbBtn.addEventListener('click', todoAdd);
todoUl.addEventListener('click', todoDelete);


console.log(todoStore ,'todoStore')
