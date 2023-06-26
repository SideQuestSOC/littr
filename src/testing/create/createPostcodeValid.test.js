import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { isValid } from 'postcode';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';

test('validates postcode input in CreateCardForm', () => {
  // Mock the props required for testing
  const isSignedIn = true;

  // Render the CreateCardForm component within a Router
  render(
    <Router>
      <CreateCardForm isSignedIn={isSignedIn} />
    </Router>
  );

  // Get the location postcode input field
  const postcodeInput = screen.getByPlaceholderText('Postcode');

  // Test with a valid postcode
  fireEvent.change(postcodeInput, { target: { value: 'SW1A 1AA' } });

  // Assert that the postcode input field has the correct value
  expect(postcodeInput.value).toBe('SW1A 1AA');

  // Assert that the postcode is considered valid
  expect(isValid(postcodeInput.value)).toBe(true);

  // Test with an invalid postcode
  fireEvent.change(postcodeInput, { target: { value: '123456' } });

  // Assert that the postcode input field has the correct value
  expect(postcodeInput.value).toBe('123456');

  // Assert that the postcode is considered invalid
  expect(isValid(postcodeInput.value)).toBe(false);
});
