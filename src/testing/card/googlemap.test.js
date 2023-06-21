import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// Import the App component
// import App from '../../Pages/App/App';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import Card from '../../Pages/CardDisplay/components/Card/Card';

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

test("Navigate from the landing page to the Card Display page, expand the first Card - the google map will be present.", async function() {
    render(
    <Router>
        <LandingPage />
        <Card />
    </Router>
    );

    // get the find a clean up button using screen.getByTestId
    const findButton = screen.getByText('Find a clean up');

    // Assert that the find a clean up button is rendered
    expect(findButton).toBeInTheDocument();


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

