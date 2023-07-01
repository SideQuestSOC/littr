import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import Card from '../../Pages/CardDisplay/components/Card/Card.js';
import LikeButton from '../../Pages/CardDisplay/components/LikeButton/LikeButton.js';
import LikeBadge from '../../Pages/CardDisplay/components/LikeButton/LikeBadge.js';

// mock the API fucntions used in the component
jest.mock('../../Models/queries.js', () => ({
  updateLikes: jest.fn(),
  deleteLikes:jest.fn(),
  countLikes: jest.fn(),
  checkIfLiked: jest.fn(),
}));

// mock the getCurrentUserId function
jest.mock('../../Models/client.js', () => ({
  getCurrentUserId: jest.fn(),
}));

// mock the useState hook
describe('LikeButton', () => {
  test('increments lkes count when signed in user clicks the like button', async () => {
    // Mock the API functions
    const updateLikesMock = jest.requireMock('../../Models/queries.js').updateLikes;
    const getCurrentUserIdMock = jest.requireMock('../../Models/client.js').getCurrentUserId;
    updateLikesMock.mockResolvedValueOnce(); // mock successful updateLikes call
    getCurrentUserIdMock.mockResolvedValueOnce('user123'); // mock successful getCurrentUserId call

    // Render the LikeButton with the necessary props
    const { getByTestId } = render(
      <LikeButton event_id="event123" isSignedIn={true} setUpdateLikeBadge={jest.fn()} updateLikeBadge={false} />

    );

  })
})


// test('like button increments by 1 when user is logged in', async () => {
//   // Mock the props required for testing
//   const event_id = 1;
//   const setUpdateLikeBadge = jest.fn();
//   const isSignedIn = true;

//   // Render the Card component with the necessary props
//   render(
//     <Router>
//     <Card />
//     <LikeButton event_id={event_id} isSignedIn={isSignedIn} setUpdateLikeBadge={setUpdateLikeBadge}/>
//     <LikeBadge />
//     </Router>

//   );

//   // Assert that the like button is rendered
//   const likeButton = screen.getAllByTestId('like-button');
//   // const likeButton = likeButtons[0];
//   expect(likeButton).toBeInTheDocument();

//   // Asset that the initial value of the like badge is 0
//   const likeBadge = screen.getAllByTestId('like-badge');
//   expect(parseInt(likeBadge.innerText)).toBe(0);

//   // Simulate a click on the like button
//   fireEvent.click(likeButton);

//   // Assert that the like badge value is incremented by 1
//   await waitFor (() => {
//     expect(parseInt(likeBadge.innerText)).toBe(1);
//   });

// });