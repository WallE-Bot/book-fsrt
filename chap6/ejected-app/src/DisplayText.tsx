import React, { useState, FC } from 'react';

interface DisplayTextProps {
  getUserFullname: (username: string) => Promise<string>;
}

const DisplayText = ({getUserFullname}: DisplayTextProps) => {
  const [txt, setTxt] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  }

  const onClickShowMsg = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      const userFullName = await getUserFullname(txt);
      setMsg(`Welcome to React testing, ${userFullName}`);
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
      <p>test entry</p>
    </form>
  );
}

export default DisplayText;
