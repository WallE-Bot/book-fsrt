import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DisplayText from './DisplayText';
import '@testing-library/jest-dom/extend-expect';

describe("Test DisplayText", () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<DisplayText />);
    expect(baseElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { baseElement } = render(<DisplayText />);
    expect(baseElement).toMatchSnapshot();
  });

  it('receives input text', () => {
    const testuser = 'testuser';
    const { getByTestId } = render(<DisplayText />);
    const input = getByTestId('user-input');
    fireEvent.change(input, { target: { value: testuser } });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(testuser);
  });

  it('shows welcome message', () => {
    // define values
    const testuser = 'testuser';
    const msg = `Welcome to React testing, ${testuser}`;
    // get component and deconstruct relevant method
    const { getByTestId } = render(<DisplayText />);
    // get the input
    const input = getByTestId('user-input');
    // get the button component
    const button = getByTestId('input-submit');
    // get the label component
    const label = getByTestId('final-msg');
    // fire the input change event
    fireEvent.change(input, { target: { value: testuser } });
    // fire the button event
    fireEvent.click(button)
    // test for label
    expect(label).toBeInTheDocument();
    // test for label value
    expect(label.innerHTML).toBe(msg);
  })
});
