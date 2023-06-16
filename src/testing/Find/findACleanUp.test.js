import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import App from '../../Pages/App/App'

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

// Check if the button can be pressed by simulating a click event and navigates to card display page

test('button click should navigate to CardDisplay page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    fireEvent.click(screen.getByText('Find a clean up'));
  
    expect(screen.getByTestId('card-display')).toBeInTheDocument();
  });
