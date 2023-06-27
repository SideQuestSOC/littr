import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';

test("user can add accessibility information in create card form", async () => {
  // Mock the props required for testing
  const isSignedIn = true;

  // Arrange
  render(
    <Router>
      <CreateCardForm isSignedIn={isSignedIn} />
    </Router>
  );

  // Act
  // Fill in the accessibility checkboxes
  fireEvent.click(screen.getByLabelText('Nearby Bathrooms'));
  fireEvent.click(screen.getByLabelText('Uneven ground'));
  fireEvent.click(screen.getByLabelText('Remote location'));
  fireEvent.click(screen.getByLabelText('Nearby Parking'));

  // Assert
  // Check if the checkboxes are checked
  expect(screen.getByLabelText('Nearby Bathrooms')).toBeChecked();
  expect(screen.getByLabelText('Uneven ground')).toBeChecked();
  expect(screen.getByLabelText('Remote location')).toBeChecked();
  expect(screen.getByLabelText('Nearby Parking')).toBeChecked();
});
