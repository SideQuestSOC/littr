import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import LikeButton from '../../Pages/CardDisplay/components/LikeButton/LikeButton.js';
// import LikeBadge from '../../Pages/CardDisplay/components/LikeButton/LikeBadge.js';


describe('LikeButton', () => {
  test('increments the like count when clicked by a signed-in user', async () => {
    // Mock the necessary functions and values
    const mockEventId = '456';
    const mockUpdateLikeBadge = jest.fn();
    const mockUpdateLikeBadgeValue = true;

    render(
      <LikeButton
        event_id={mockEventId}
        isSignedIn={true}
        setUpdateLikeBadge={mockUpdateLikeBadge}
        updateLikeBadge={mockUpdateLikeBadgeValue}
      />
    );
    // Simulate a click on the like button
    fireEvent.click(screen.getByTestId('like-button'));

    // Assert that the like count if incremented by 1
    expect(await screen.findByTestId('like-badge')).toBeInTheDocument(1);
  });

  test('decrements the like count when clicked by a signed-in user', async () => {
    // Mock the necessary functions and values
    const mockEventId = '456';
    const mockUpdateLikeBadge = jest.fn();
    const mockUpdateLikeBadgeValue = true;
    
    render(
      <LikeButton
        event_id={mockEventId}
        isSignedIn={false}
        setUpdateLikeBadge={mockUpdateLikeBadge}
        updateLikeBad={mockUpdateLikeBadgeValue}
        />
    );
    // Simulate a click on the like button  
    fireEvent.click(screen.getByTestId('like-button'));

    // Assert that the like count if decremented by 1
    expect(screen.getByTestId('like-badge')).toBeInTheDocument(0);
});
});