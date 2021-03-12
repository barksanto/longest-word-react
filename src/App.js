import './App.css';
import InputBox from './components/InputBox';
import RandomLetters from './components/RandomLetters';


function App() {
  return (
    <div className="App">
      <div>I'm the App component</div>
      <h1>Welcome to the longest word game!</h1>
      <RandomLetters />
      <br />
      <br />
      <br />
      <InputBox />
    </div>
  );
}

export default App;
