import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm';

// Test to check if the user can enter a valid address

// Check if the user can enter a valid address
test("user can enter a valid address", () => {
// Arrange
// render the CreateCardForm component
render(
<Router>
<CreateCardForm isSignedIn={true} setIsSignedIn={() => {}} setCardData={() => {}} setFilter={() => {}} />
</Router>
);

// Act
// Get the location address input field
const locationAddressInput = screen.getByPlaceholderText("Address");
expect(locationAddressInput).toBeInTheDocument();

// Enter a valid address
fireEvent.change(locationAddressInput, { target: { value: "123 Main Street" } });

// Assert
// Check if the entered address is displayed correctly
expect(locationAddressInput.value).toBe("123 Main Street");
});
// Above test checks if the user can enter a valid address and passes