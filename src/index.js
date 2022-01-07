import { createStore } from "redux";

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');


//리듀서 생성
const modifyReducer = (count = 0) => {
  return count;
}
//데이터를 저장할 store를 생성
//createStore 인자로 넣어줄 리듀서는 함수어야 함!
const modifyStore = createStore(modifyReducer);

console.log(modifyStore.getState() ,'modifyStore')




