import React, { useReducer } from 'react';
import Greeting from './Greeting';

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
  // return from reducer
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);

  // return
  return (
    <div>
      <Greeting
        message={message}
        enteredName={enteredName}
        greetingDispatcher={dispatch}
      />
    </div>
  );
}
