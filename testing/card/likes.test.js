// Write test that checks if Card4 component renders correctly
// and if it has a like button that works
// Check the initial state of thumb likes
// Check if the open state is toggled
// Simulate a click on the like button
// Test if the like button increments the number of likes by 1

import React from 'react';
import { render, fireEvent, screen } from '@testing-libraries/react';
// import Card4 from '';

test('toggle like button test increment by one', () => {
    // Render compnent
    const { getByTestId } = render(<Card4 />);

    // Get the toggle button element using getByTestId
    const toggleButton = screen.getByTestId('toggle-button');
    const thumbsUpElement = screen.getByTestId('thumbs-up-count');

    // Check the initial state of open and thumbsUp count
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(thumbsUpElement.textContent).toBe('0');

    // Simulate a click on the toggle button
    fireEvent.click(toggleButton);

    // Check if open state is toggled
    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');

    // Simulate clicking the thumbsUp button
    fireEvent.click(screen.getByTestId('thumbs-up-button'));

    // Check if the thumbsUp count is incremented by 1
    expect(thumbsUpElement.textContent).toBe('1');

});