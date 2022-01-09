import react from 'react';
import { connect } from 'react-redux'
function App(props) {
  const { state } = props;
  return (
    <div className="App">
       <div className="btn-wrap">
        <input type="text" />
        <button type="button">ADD</button>
       </div>
       <ul className="todo">
        {
          state.map((item, idx) => <li key={item.id}>{item.title}</li>)
        }
       </ul>
    </div>
  );
}
const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(App);
