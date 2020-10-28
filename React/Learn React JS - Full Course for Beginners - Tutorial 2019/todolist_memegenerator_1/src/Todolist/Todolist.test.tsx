import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todolist from './Todolist';

describe('<Todolist />', () => {
  test('it should mount', () => {
    render(<Todolist />);
    
    const todolist = screen.getByTestId('Todolist');

    expect(todolist).toBeInTheDocument();
  });
});