import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayText from './DisplayText';

function App() {

  // getUserFullname through API call
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );

    if(usersResponse.ok) {
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username;
      });
      return userByName.name;
    }
    return '';
  }

  return (
    <div className="App" data-testid='app'>
      <DisplayText getUserFullname={getUserFullname} />
    </div>
  );
}

export default App;
