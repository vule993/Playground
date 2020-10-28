import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Joke from './Joke';

describe('<Joke />', () => {
  test('it should mount', () => {
    render(<Joke />);
    
    const joke = screen.getByTestId('Joke');

    expect(joke).toBeInTheDocument();
  });
});