import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import UserTodos from './UserTodos';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe("Test UserTodos", () => {
  // mock data
  /*
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
  */

  it('renders without crashing', () => {
    const username = 'testUser';

    const { baseElement } = render(<UserTodos
      username={username}
    />);

    expect(baseElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const username = 'testUser';

    const { baseElement } = render(<UserTodos
      username={username}
    />);

    expect(baseElement).toMatchSnapshot();
  });
})
