import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';
import CreatePostButton from '../../Pages/CardDisplay/components/CreatePostButton/CreatePostButton.js';

// Test that a signed in user can access the create a post form

test("signed in user can access create a post form", async () => {
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
    // simulate a click event on the create post button

    fireEvent.click(screen.getByTestId('create-post-button'));

    // Assert that the  CreateCardForm component is rendered
    await waitFor(() => {
        expect(screen.getByTestId('create-card-form')).toBeInTheDocument();
    });
})