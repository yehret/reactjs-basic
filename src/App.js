import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'What is React?',
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
  {
    title: 'What is React Virtual DOM?',
    variants: [
      'Virtual representation of real DOM',
      'Another name of React',
      'Library to build websites',
    ],
    correct: 0,
  },
  {
    title: 'What is React component life cycle?',
    variants: [
      'Stages of component existence',
      'Method of react',
      'Library to build websites',
    ],
    correct: 0,
  },
  {
    title: 'What is React context?',
    variants: [
      'Library to build websites',
      'It is an object that stores data',
      'Way to pass data between components',
    ],
    correct: 2,
  },
  {
    title: 'What is React hook?',
    variants: [
      'Function to interact with state of React',
      'Library to build websites',
      'It is an object that stores data',
    ],
    correct: 0,
  },
  {
    title: 'What is React state?',
    variants: [
      'State is an object that stores data',
      'State is a way to interact with DOM',
      'State is a function',
    ],
    correct: 0,
  },
  {
    title: 'What is React props?',
    variants: [
      'Props is a way to pass data between components',
      'Props is a function',
      'Props is an object that stores data',
    ],
    correct: 0,
  },
  {
    title: 'What is React DOM?',
    variants: [
      'DOM is a virtual representation of real DOM',
      'DOM is a way to interact with DOM',
      'DOM is a function',
    ],
    correct: 0,
  },
];


function Result({correct, startAgain}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="celebrate" />
      <h2>You have anwered {correct} out of {questions.length}</h2>
      <button onClick={startAgain}>Try again</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const progressPerc = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressPerc}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, i) => (
          <li onClick={() => onClickVariant(i)} key={i}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) setCorrect(correct + 1);
  };

  const startAgain = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} onClickVariant={onClickVariant} question={question} />
      ) : (
        <Result startAgain={startAgain} correct={correct}/>
      )}
    </div>
  );
}

export default App;
