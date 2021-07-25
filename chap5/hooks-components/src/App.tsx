import React, { useReducer, useState, useCallback } from 'react';
import GreetingFunctional from './GreetingFunctional';

const reducer = (state: any, action: any) => {
  console.log('enteredNamedReducer');

  switch(action.type) {
    case 'enteredName':
      if (state.enteredName === action.payload) {
        return state;
      }
      return { ...state, enteredName: action.payload };
    case 'message':
      return { ...state, message: `Hello, ${action.payload}` };
    default:
      throw new Error('Invalid action type ' + action.payload);
  }
}

const initialState = {
  enteredName: '',
  message: '',
}

function App() {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);

  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);

  const setCountCallBack = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1:
      Number(count + 1) + startCount;

    setCount(inc);
  }, [count, startCount])

  const onWelcomeButtonClick = () => {
    setCountCallBack();
  }

  const onChangeStartCount = (e:
    React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartCount(Number(e.target.value));
  }

  return (
    <div>
      <GreetingFunctional
        message={message}
        enteredName={enteredName}
        greetingDispatcher={dispatch}
      />

      <p>Enter a number and we'll incrememt it</p>
      <input
        value={startCount}
        onChange={onChangeStartCount}
      />
      <button onClick={onWelcomeButtonClick}>increment</button>
    </div>
  );
}

export default App;
