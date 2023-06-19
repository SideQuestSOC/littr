import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('CreateCardForm', () => {
  it('should redirect to card display page when user is not signed in', async () => {
    // Arrange
    const isSignedIn = false;
    const setIsSignedIn = jest.fn();
    const setCardData = jest.fn();

    // Act
    render(
      <MemoryRouter>
        <CreateCardForm
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
          setCardData={setCardData}
        />
      </MemoryRouter>
    );

    // Assert
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/src/pages/carddisplay');
    });
  });
});
