import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CreatePostButton from '../../Pages/CardDisplay/components/CreatePostButton/CreatePostButton.js';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';

// Check if create post button renders
test("renders create post button", () => {
    // render the CreatePostButton component
        // Note: CreatePostButton component uses Link component from react-router-dom to create the test environment
    render(
    <Router>
    <CreatePostButton />
    </Router>);
    // get the create post button using screen.getByTestId
    const createPostButton = screen.getByTestId('create-post-button');
    // Assert that the create post button is rendered
    expect(createPostButton).toBeInTheDocument();
});
// Above test passes

test('renders create post button and navigates to create card form', async () => {
    // Render the CreatePostButton component within a Router
    render(
      <Router>
        <CreatePostButton />
        <CreateCardForm />
      </Router>
    );
    // Get the create post button using screen.getByTestId
    const createPostButton = screen.getByTestId('create-post-button');
    // Assert that the create post button is rendered
    expect(createPostButton).toBeInTheDocument();
    // Simulate a click event on the create post button
    
    fireEvent.click(screen.getByTestId('create-post-button'));


    //Assert that the  CreateCardForm component is rendered
    await waitFor(() => {
      expect(screen.getByTestId('create-card-form')).toBeInTheDocument();
  });
});


