import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm';

test('user can add recommended equipment', () => {
  // Render the CreateCardForm component within a Router

  // Arrange
  render(
    <Router>
      <CreateCardForm isSignedIn={true} />
    </Router>
  );

  // Act
  // Type recommended equipment in the input field
  const recommendedEquipmentInput = screen.getByPlaceholderText("e.g. gloves, pickers, water");

  fireEvent.change(recommendedEquipmentInput, {
    target: { value: 'gloves, pickers, water' },
  });

  // Assert that the input value is set correctly
  expect(recommendedEquipmentInput.value).toBe('gloves, pickers, water');
});
