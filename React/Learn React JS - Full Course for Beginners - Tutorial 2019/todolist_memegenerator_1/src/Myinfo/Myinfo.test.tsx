import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Myinfo from './Myinfo';

describe('<Myinfo />', () => {
  test('it should mount', () => {
    render(<Myinfo />);
    
    const myinfo = screen.getByTestId('Myinfo');

    expect(myinfo).toBeInTheDocument();
  });
});