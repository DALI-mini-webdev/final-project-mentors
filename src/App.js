import logo from './logo.svg';
import DogBoard from './components/DogBoard';
import ToDoBoard from './components/ToDoBoard';
import './App.css';
import firebase from './firebase/index';

function App() {
  console.log(firebase);
  console.log(firebase.db);
  return (
    <div className="App">
      {/* <DogBoard /> */}
      <ToDoBoard />
    </div>
  );
}

export default App;
