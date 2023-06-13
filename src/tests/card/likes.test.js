// Write test that checks if Card4 component renders correctly
// and if it has a like button that works
// Check the initial state of thumb likes
// Check if the open state is toggled
// Simulate a click on the like button
// Test if the like button increments the number of likes by 1

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../../../src/Pages/CardDisplay/components/Card/Card.js';

test('Clicking the like button increments the count by 1', () => {
  render(<Card />);

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







// test("Click like button, badge increases by 1", async () => {
//     render(<Card />);
//     const likeButton = screen.getByTestId("like-button");
//     const thumbsUpElement = screen.getByTestId("badge");
  
//     await act(() => {
//       userEvent.click(likeButton);
//     });
  
//     expect(thumbsUpElement).toHaveTextContent("1");
//   });
  
//   test("Click report button, alert appears", async () => {
//     render(<Card />);
//     const reportButton = screen.getByTestId("report-button");
  
//     const Alert = jest.spyOn(window, "alert").mockImplementation();  
  
//     await act(async () => {
//       userEvent.click(reportButton);
//     });
  
//     expect(Alert).toHaveBeenCalledWith(
//       "This post has been reported. Thank you for your feedback."
//     );
  
//   });