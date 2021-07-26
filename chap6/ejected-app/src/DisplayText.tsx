import React, { useState } from 'react';

const DisplayText = () => {
  const [txt, setTxt] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  }

  const onClickShowMsg = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();

      setMsg(`Welcome to React testing, ${txt}`);
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
