import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todoitem from './Todoitem';

describe('<Todoitem />', () => {
  test('it should mount', () => {
    render(<Todoitem />);
    
    const todoitem = screen.getByTestId('Todoitem');

    expect(todoitem).toBeInTheDocument();
  });
});