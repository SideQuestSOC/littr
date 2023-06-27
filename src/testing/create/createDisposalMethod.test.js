import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';
import CreatePostButton from '../../Pages/CardDisplay/components/CreatePostButton/CreatePostButton.js';

// Test that a user can add the disposal method in the create post form

test("user can add disposal method", async () => {
  // Mock the props required for testing
  const isSignedIn = true;

  // Arrange
  // Render the CreatePostButton component within a Router
  render(
    <Router>
      <CreatePostButton />
      <CreateCardForm isSignedIn={isSignedIn} />
    </Router>
  );
  
  // Act
  // Get the create post button using screen.getByTestId
  const createPostButton = screen.getByTestId('create-post-button');
  // Assert that the create post button is rendered
  expect(createPostButton).toBeInTheDocument();
  // Simulate a click event on the create post button
  fireEvent.click(screen.getByTestId('create-post-button'));

  // Assert that the CreateCardForm component is rendered
  await waitFor(() => {
    expect(screen.getByTestId('create-card-form')).toBeInTheDocument();
  });

   // Get the disposal method select input
   const disposalMethodSelect = screen.getByLabelText('Disposal Method');

  // Manually set the value of the select input
  disposalMethodSelect.value = 'Council pick-up';

  // Dispatch a change event on the select input
  fireEvent.change(disposalMethodSelect);

  // Assert that the selected disposal method is displayed
  expect(disposalMethodSelect.value).toBe('Council pick-up');
});
