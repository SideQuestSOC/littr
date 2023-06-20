import { render, screen } from '@testing-library/react';
import Card from '../../Pages/CardDisplay/components/Card/Card';

// Write a test that chacks if card display renders ✅
// Post Title ✅
// Location
// Date
// Time
// Creator
// Details
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
    const cardTitle = 'card.title';
    render(<Card header={cardTitle} />);
    // Act
    // get the post title using screen.getByText
    const postTitle = screen.getByText(cardTitle);
    // Assert that the post title is rendered
    expect(postTitle).toBeInTheDocument();
});
});

