// Write test that checks if Card4 component renders correctly
// and if it has a like button that works
// Check the initial state of thumb likes
// Check if the open state is toggled
// Simulate a click on the like button
// Test if the like button increments the number of likes by 1

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../../Pages/CardDisplay/components/Card/Card.js';

import { act } from "react-dom/test-utils";

test('Clicking the like button increments the count by 1', () => {
  render(<Card />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => { 
    // test code
    // Get the like button element
      const likeButton = screen.getByTestId('like-button');
      // Get the badge element that displays the count
      const badgeElement = screen.getByTestId('like-badge');

      // Get the initial count
      const initialCount = parseInt(badgeElement.textContent);

      // Simulate a click on the like button
      userEvent.click(likeButton);

      // Get the updated count after the click
      const updatedCount = parseInt(badgeElement.textContent);

      // Assert that the count is incremented by 1
      expect(updatedCount).toBe(initialCount + 1);
    });
});