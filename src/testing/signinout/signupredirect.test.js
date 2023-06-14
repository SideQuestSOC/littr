import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from "react-dom/test-utils";

// Import the App component
import App from '../../Pages/App/App';

test("When a new user successfully signs up, the Sign In component is automatically rendered.", function() {
    render(<App />);

    // Simulate a click on the Create a clean up button
    fireEvent.click(screen.getByText("Create a clean up"));

    // Simulate a click on the Sign Up button
    fireEvent.click(screen.getByText("Sign Up"));

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        // Fill in the sign up form
        const firstNameInput = screen.getByTestId("firstName-input");
        userEvent.type(firstNameInput, 'Albus');
        const lastNameInput = screen.getByTestId("lastName-input");
        userEvent.type(lastNameInput, 'Dumbledore');
        const emailInput = screen.getByTestId("email-input");
        userEvent.type(emailInput, 'a@dumbledore.co.uk');
        const passwordInput = screen.getByTestId("password-input");
        userEvent.type(passwordInput, 'sherbetlemon');
    });

    // Simulate a click on the submit button
    fireEvent.click(screen.getByText("Submit"));

    // Select the <h1> element in the Sign In component
    const heading = screen.getByText('Sign In'); 

    // Assert that the <h1> element is in the document 
    // (aka that the Sign In component has been automatically been rendered after a new user successfully signs up)
    expect(heading).toBeInTheDocument(); 
});