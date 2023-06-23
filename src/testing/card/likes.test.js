import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Card from '../../Pages/CardDisplay/components/Card/Card.js';

test('like button increments by 1 when user is logged in', async () => {
  // Mock the props required for testing
  const event_id = 1;
  const setUpdateLikeBadge = jest.fn();
  const isSignedIn = true;

  // Render the Card component with the necessary props
  render(
    <Card event_id={event_id} setUpdateLikeBadge={setUpdateLikeBadge} isSignedIn={isSignedIn} />
  );

  // Assert that the like button is rendered
  const likeButton = screen.getByTestId('like-button');
  expect(likeButton).toBeInTheDocument();

  // Asset that the initial value of the like badge is 0
  const likeBadge = screen.getByTestId('like-badge');
  expect(likeBadge.textContent).toBe(" ");

  // Simulate a click on the like button
  fireEvent.click(likeButton);

  // Assert that the like badge value is now 1
  expect(likeBadge.textContent).toBe("1");

  // Assert that the setUpdateLikeBadge function is called with the correct arguments
  expect(setUpdateLikeBadge).toHaveBeenCalledWith(1);
});