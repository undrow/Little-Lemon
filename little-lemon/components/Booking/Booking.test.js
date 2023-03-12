import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Booking from './BookingForm';

describe('<Booking />', () => {
  test('it should mount', () => {
    render(<Booking />);
    
    const booking = screen.getByTestId('Booking');

    expect(booking).toBeInTheDocument();
  });
});