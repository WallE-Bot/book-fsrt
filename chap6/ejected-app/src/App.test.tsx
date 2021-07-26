import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getByTestId } = render(<App />);
  const divElement = screen.getByTestId('app');
  expect(divElement).toBeInTheDocument();
});
