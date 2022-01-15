import react from 'react';
import { connect } from 'react-redux'
import { useInput } from './Hooks/useInput';
import { addTodo, deleteTodo } from './store';
function App(props) {
  const { todos, add, deleteTest} = props;
  const [ state, setState] = useInput({
    title:'',
  });
  const onClick = () => {
    add(state.title);
  }

  const deleteClick = (id) => {
    deleteTest(id)
  }
  return (
    <div className="App">
       <div className="btn-wrap">
        <input type="text" name='title' defaultValue={state.title ||''} onChange={(e) => setState(e)}/>
        <button type="button" onClick={()=> onClick()}>ADD</button>
       </div>
       <ul className="todo">
        {
          todos.map((item) => 
          <li key={item.id}>
            {item.title}
            <span onClick={ ()=> deleteClick(item.id)}>❌</span>
          </li>)
        }
       </ul>
    </div>
  );
}
const mapStateToProps = state => ({
  todos: state,
});

const mapDisPatchToProps = dispatch => {
  return {
    add : text => dispatch(addTodo(text)),
    deleteTest : id => dispatch(deleteTodo(id))
  }
}
export default connect(mapStateToProps,mapDisPatchToProps)(App);
