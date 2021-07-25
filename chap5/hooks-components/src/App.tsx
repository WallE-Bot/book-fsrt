import React, { useReducer, useState, useCallback, useEffect } from 'react';
import GreetingFunctional from './GreetingFunctional';
import ListCreator from './ListCreator';

export interface ListItem {
  id: number;
}

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
    console.log(count, typeof count);
    const inc = count + 1 > startCount ? count + 1:
      Number(count + 1) + startCount;

    setCount(inc);
  }, [count, startCount])

  const [listItems, setListItems] = useState<Array<ListItem>>();

  useEffect(() => {
    const li = [];

    for (let i = 0; i < count; i++) {
      li.push({id: i});
    }
    setListItems(li);
  }, [count])

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
      <span>{count}</span>
      <button onClick={onWelcomeButtonClick}>increment</button>

      <ListCreator listItems={listItems} />
    </div>
  );
}

export default App;
