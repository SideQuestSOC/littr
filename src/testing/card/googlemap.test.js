import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// Import the LandingPage component correctly
import App from '../../Pages/App/App';

test("Navigate from the landing page to the Card Display page, expand the first Card - the google map will be present.", function() {
    render(<App />);

    // Simulate a click on the Find a clean up button
    fireEvent.click(screen.getByText("Find a clean up"));
    
    // Select the first instance of the Card 'Details' button
    const buttons = screen.getAllByText('Details');
    const firstButton = buttons[0];

    fireEvent.click((firstButton));

    // select the google map iframe
    const actual = screen.getByTitle('google_map');

    // expect the google map iframe to be in the document
    expect(actual).toBeInTheDocument();
});
