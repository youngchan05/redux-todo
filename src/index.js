import { createStore } from "redux"; //store를 사용하기 위해 import;

const log = console.log;
const abbBtn = document.getElementById('btn-add');
const input = document.querySelector('input');
const todoUl = document.querySelectorAll('.todo-list')[0];

log(abbBtn, input, todoUl);

const todoDelete = (e) => {
  if(e.target.className === 'remove-btn'){
    const pane = e.target.parentNode;
    pane.remove();
  }
}
const todoAdd = () => {
  const { value } = input;
  if(value.length < 1) return alert('입력해주세요!')
  const li  = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('remove-btn')
  deleteBtn.innerText = '❌';
  li.innerText = value;
  li.append(deleteBtn);
  todoUl.append(li);
  input.value = '';
}


abbBtn.addEventListener('click', todoAdd);
todoUl.addEventListener('click', todoDelete);
const intalalState = [];
