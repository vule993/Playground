import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Jokes from './Jokes';

describe('<Jokes />', () => {
  test('it should mount', () => {
    render(<Jokes />);
    
    const jokes = screen.getByTestId('Jokes');

    expect(jokes).toBeInTheDocument();
  });
});