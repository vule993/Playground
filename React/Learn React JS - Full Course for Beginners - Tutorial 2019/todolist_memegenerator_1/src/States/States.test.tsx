import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import States from './States';

describe('<States />', () => {
  test('it should mount', () => {
    render(<States />);
    
    const states = screen.getByTestId('States');

    expect(states).toBeInTheDocument();
  });
});