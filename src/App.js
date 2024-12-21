import './index.scss';

const questions = [
  {
    title: 'React - is a/an ... ?',
    variants: ['library', 'framework', 'app'],
    correct: 0,
  },
  {
    title: 'Component - is a/an ... ',
    variants: ['app', 'part of an app or a website', 'i dont know'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'Just simple HTML',
      'Function',
      'Same as HTML, but with ability to execute JavaScript',
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ypu have anwered 3 out of 10</h2>
      <button>Try again</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>What is useState?</h1>
      <ul>
        <li>Function for storing component's data</li>
        <li>Global state</li>
        <li>Thats when you are useless</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;