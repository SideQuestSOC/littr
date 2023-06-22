import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../../Pages/CardDisplay/components/Card/Card.js';
// import CardDisplay from '../../Pages/CardDisplay/CardDisplay.js';

// Write a test that chacks if card display renders ✅
// Post Title ✅
// Location ✅
// Date ✅
// Time ✅
// Creator ✅
// Details ✅
// Additional information
// Disposal method
// Recommended equipment

describe('elements of card display', () => {
test("renders card display", () => {
    // Arrange
    render(
        <Card />
    );
    // Act
    // get the card display using screen.getByTestId
    const cardDisplay = screen.getByTestId('card-display');
    // Assert that the card display is rendered
    expect(cardDisplay).toBeInTheDocument();
});

test('renders post title', () => {
    // Arrange
    render(
    <Card />);
    // Act
    // get the post title using screen.getByText
    const postTitle = screen.getByTestId('card-title');
    // Assert that the post title is rendered
    expect(postTitle).toBeInTheDocument();
});

// Renders location details
test('renders location', () => {
    // Arrange
    render(
        <Card />);
        // Act
        // Select the first instance of the Card 'Details' button
    const buttons = screen.getAllByText('Details');
    const firstButton = buttons[0];

    fireEvent.click((firstButton));
        // get the location using getByTestId
        const cardLocation = screen.getByTestId('card-location');
        // Assert that the location is rendered
        expect(cardLocation).toBeInTheDocument();
});

// Renders Date
test('renders date', () => {
    // Arrange
    render(
        <Card />);
        // Act
        // Select the first instance of the Card 'Details' button
        const buttons = screen.getAllByText('Details');
        const firstButton = buttons[0];

        fireEvent.click((firstButton));
        // get the date using getByTestId
        const cardDate = screen.getByTestId('card-date');
        // Assert that the date is rendered
        expect(cardDate).toBeInTheDocument();     
});

// Render time
test('renders time', () => {
    // Arrange
    render(
        <Card />);
        // Act
        // Select the first instance of the Card 'Details' button
        const buttons = screen.getAllByText('Details');
        const firstButton = buttons[0];

        fireEvent.click((firstButton));
        // get the time using getByTestId
        const cardTime = screen.getByTestId('card-time');
        // Assert that the time is rendered
        expect(cardTime).toBeInTheDocument();
});

// Render creator
test('renders creator', () => {
    // Arrange
    render(
        <Card />);
        // Act
        // Select the first instance of the Card 'Details' button
        const buttons = screen.getAllByText('Details');
        const firstButton = buttons[0];

        fireEvent.click((firstButton));
        // get the creator using getByTestId
        const cardCreator = screen.getByTestId('card-creator');
        // Assert that the creator is rendered
        expect(cardCreator).toBeInTheDocument();
});

// Render Details
test('render details', () => {
    // Arrange
    render(
        <Card />);
        // Act
        // Select the first instance of the Card 'Details' button
        const buttons = screen.getAllByText('Details');
        const firstButton = buttons[0];
        
        fireEvent.click((firstButton));
        // get the details using getByTestId
        const cardDetails = screen.getByTestId('card-details');
        // Assert that the details is rendered
        expect(cardDetails).toBeInTheDocument();
});

// Render checkboxes based on the accessibility boolean props
test('renders checkboxes', () => {
    // Arrange
    render(
        <Card />);
        // Act
        // Select the first instance of the Card 'Details' button
        const buttons = screen.getAllByText('Details');
        const firstButton = buttons[0];

        fireEvent.click((firstButton));
        // get the checkboxes using getByTestId
        const cardCheckboxes = screen.getByTestId('card-checkboxes');
        // Assert that the checkboxes is rendered
        expect(cardCheckboxes).toBeInTheDocument();
    });

});