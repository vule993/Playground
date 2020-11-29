import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventHandling from './EventHandling';

describe('<EventHandling />', () => {
  test('it should mount', () => {
    render(<EventHandling />);
    
    const eventHandling = screen.getByTestId('EventHandling');

    expect(eventHandling).toBeInTheDocument();
  });
});