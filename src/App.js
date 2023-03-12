import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import GetItemComponent from './components/GetItemComponent';
import StyledComponent from './components/StyledComponents';
import StyledUseStateProps from './components/StyledUseStateProps';
import EmotionComponent from './components/EmotionComponent';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <GetItemComponent />
      <StyledComponent />
      <StyledUseStateProps />
      <EmotionComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React テスト中です
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
