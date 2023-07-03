import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm';

describe('Create Post Button to submit form', () => {
    test('renders Create Post Button', () => {
        render(
            <Router>
            <CreateCardForm />
            </Router>
        );
        const createPostButton = screen.getByTestId('create-post-button-submit');

        expect(createPostButton).toBeInTheDocument();
});

    test('should display an alert when required fields are missing', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {
            render(
                <Router>
                <CreateCardForm />
                </Router>
            );
            fireEvent.click(screen.getByTestId('create-post-button-submit'));
            expect(alertMock).toHaveBeenCalledWith('Please fill it all in!');
            alertMock.mockRestore();
        });
        });

    test('should display an alert when the postcode is invalid', () => {
        // Render the component
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {
            render(
                <Router>
                <CreateCardForm />
                </Router>
            );
            // Set an invalid postcode
            fireEvent.change(screen.getByLabelText('Postcode'), { target: { value: '1234' }});

            // Trigger the submit button
            fireEvent.click(screen.getByTestId('create-post-button-submit'));

            expect(alertMock).toHaveBeenCalledWith('Please enter a valid postcode!');
            alertMock.mockRestore();
        })
    })
})