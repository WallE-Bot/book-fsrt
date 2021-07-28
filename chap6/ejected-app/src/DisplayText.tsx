import React, { useState, FC } from 'react';
import UserTodos from './UserTodos';

interface DisplayTextProps {
  getUserFullname: (username: string) => Promise<string>;
}

const DisplayText = ({getUserFullname}: DisplayTextProps) => {
  const [txt, setTxt] = useState('');
  const [msg, setMsg] = useState('');
  const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();

  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  }

  const onClickShowMsg = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      setTodoControl(null);
      const userFullName = await getUserFullname(txt);
      setMsg(`Welcome to React testing, ${userFullName}`);
      setTodoControl(<UserTodos username={txt} />);
    }

  return (
    <form>
      <label>Enter your name</label>
      <input
        data-testid='user-input'
        value={txt}
        onChange={onChangeTxt}
      />
      <button
        data-testid='input-submit'
        onClick={onClickShowMsg}
      >
        Show Message
      </button>
      <label
        data-testid='final-msg'
      >
        {msg}
      </label>
      {todoControl}
    </form>
  );
}

export default DisplayText;
