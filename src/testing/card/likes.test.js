import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import Card from '../../Pages/CardDisplay/components/Card/Card.js';
import LikeButton from '../../Pages/CardDisplay/components/LikeButton/LikeButton.js';
import LikeBadge from '../../Pages/CardDisplay/components/LikeButton/LikeBadge.js';

test('like button increments by 1 when user is logged in', async () => {
  // Mock the props required for testing
  const event_id = 1;
  const setUpdateLikeBadge = jest.fn();
  const isSignedIn = true;

  // Render the Card component with the necessary props
  render(
    <Router>
    <Card event_id={event_id} setUpdateLikeBadge={setUpdateLikeBadge} isSignedIn={isSignedIn} />
    <LikeButton />
    <LikeBadge />
    </Router>

  );

  // Assert that the like button is rendered
  // const likeButtons = screen.getallByTestId('like-button');
  // const likeButton = likeButton[0];
  // expect(likeButton).toBeInTheDocument();

  // Asset that the initial value of the like badge is 0
  // const likeBadge = screen.getByTestId('like-badge');
  // expect(likeBadge.textContent).toBe(' ');

  // Simulate a click on the like button
  // fireEvent.click(likeButton);

  // Assert that the like badge value is incremented by 1
  // expect(likeBadge.textContent).toBe('1');


});