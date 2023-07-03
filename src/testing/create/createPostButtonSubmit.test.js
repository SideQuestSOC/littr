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
})