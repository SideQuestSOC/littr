import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreatePostButton from '../../Pages/CardDisplay/components/CreatePostButton/CreatePostButton.js';

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


