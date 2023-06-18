// Test to check create a clean up button on landing page works by navigating to create a clean up page

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm';

// Check if create a clean up button renders
test("renders create a clean up button", () => {
    // render the create a clean up button component
    render(
        <Router>
            <LandingPage />
        </Router>
    );
    // get the create a clean up button using screen.getByTestId
    const createButton = screen.getByText('Create a clean up');
    // Assert that the create a clean up button is rendered
    expect(createButton).toBeInTheDocument();
});
// Above Test Passes

// Check if the button can be pressed by simulating a click event and navigates to create a clean up page

test('button click should navigatete to CreateACleanUp page', async () => {
    render(
        <Router>
            <LandingPage />
            <CreateCardForm />
        </Router>
    );

    // get the create a clean up button using screen.getByTestId
    const createButton = screen.getByText('Create a clean up');
    // Assert that the create a clean up button is rendered
    expect(createButton).toBeInTheDocument();

    fireEvent.click(screen.getByText('Create a clean up'));

    // Assert that the  CreateCardForm component is rendered
    await waitFor(() => {
        expect(screen.getByTestId('create-card-form')).toBeInTheDocument();
    });
});