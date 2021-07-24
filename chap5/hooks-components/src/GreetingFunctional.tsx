import React from 'react';

// enteredName, greetingDispatcher, input, onChangeName
interface GreetingProps {
  enteredName: string;
  message: string;
  greetingDispatcher: React.Dispatch<{
    type: string,
    payload: string
  }>;
}

export default function Greeting(props: GreetingProps) {
  console.log('rendering Greeting');
  const {enteredName, message, greetingDispatcher: dispatch} = props;

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'enteredName', payload: e.target.value});
    dispatch({type: 'message', payload: e.target.value});
  }

  return <div>
    <input
      value={enteredName}
      onChange={onChangeName}
    />
    {message}
  </div>;
}
