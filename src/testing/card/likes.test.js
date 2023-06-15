import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../../Pages/CardDisplay/components/Card/Card.js';

// Check if like button renders 
test("renders like button", () => {
  // render Card component
  render(<Card />);
  // get the like button using screen.getByTestId
  const likeButton = screen.getByTestId('like-button');
  // Assert that the like button is rendered
  expect(likeButton).toBeInTheDocument();
});
// Above test passes

// Check if the button can be pressed by simulating a click event and increments by 1
test("clicks the like button", () => {
  // render the Card component
  render(<Card />);
  // get the like button using screen.getByTestId
  const likeButton = screen.getByTestId('like-button');
  // Click the like button
  fireEvent.click(likeButton);
  // Assert that the thumbsUp state has been updated
  expect(screen.getByTestId('like-badge')).toHaveTextContent('1');
});

