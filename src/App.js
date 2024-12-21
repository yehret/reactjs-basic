import './index.scss';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(
    ({ target: { className } }) => setCount((prev) => (className === 'minus' ? prev - 1 : prev + 1)),
    []
  );

//   const handleClick = (e) => {
//    const className = e.target.className;

//    if (className === 'minus') {
//       setCount((prev) => prev - 1);
//    } else if (className === 'plus') {
//       setCount((prev) => prev + 1);
//    }
//  };


  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={handleClick} className="minus">
          - Minus
        </button>
        <button onClick={handleClick} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
}

export default App;
