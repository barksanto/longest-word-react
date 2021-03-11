import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters'

function App() {
  return (
    <div className="App">
      <div>I'm the App component</div>
      <h1>Welcome to the longest word game!</h1>
      <Letters />
    </div>
  );
}

export default App;
