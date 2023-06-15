import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage/LandingPage';

// Check if find a clean up button renders
test("renders find a clean up button", () => {
    // render the find a clean up button component
    render(
    <Router>
        <LandingPage />
    </Router>
    );
    // get the find a clean up button using screen.getByTestId
    const findButton = screen.getByText('Find a clean up');
    // Assert that the find a clean up button is rendered
    expect(findButton).toBeInTheDocument();

});

// Above test passes

