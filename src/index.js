import { createStore } from "redux";

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

//span에 초기 값 설정
number.innerText = 0;

//리듀서 생성
const modifyReducer = (count = 0, action) => {
  const { type } = action;
  if(type === 'ADD') return count + 1;
  if(type === 'MINUS')  return count - 1;
}
//데이터를 저장할 store를 생성
//createStore 인자로 넣어줄 리듀서는 함수어야 함!
const modifyStore = createStore(modifyReducer);

const onChange = () => {
  const state = modifyStore.getState();
  number.innerText = state;
}
const clickFn = (type) => modifyStore.dispatch({type})
// const plusFn = () => {
//   modifyStore.dispatch({type:'ADD'})
// }
// const minusFn = () => {
//   modifyStore.dispatch({type:'MINUS'})
// }
plus.addEventListener('click', () => clickFn('ADD'))
minus.addEventListener('click', () => clickFn('MINUS'))

//store 상태를 구독함 
//인자로 함수를 넣어줘야함
//인자로 넘어간 함수는 구독중인 store가 변경될때 마다 호출됌.
modifyStore.subscribe(onChange)

console.log(modifyStore ,'state')


