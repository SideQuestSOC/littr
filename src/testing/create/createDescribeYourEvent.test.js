import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';

test('validates "Describe Your Event" input in CreateCardForm', () => {
  // Mock the props required for testing
  const isSignedIn = true;
  const setIsSignedIn = jest.fn();
  const setCardData = jest.fn();
  const setFilter = jest.fn();

  // Render the CreateCardForm component within a Router
  render(
    <Router>
      <CreateCardForm
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        setCardData={setCardData}
        setFilter={setFilter}
      />
    </Router>
  );

  // Get the "Describe Your Event" input field using its ID
  const describeEventInput = screen.getByPlaceholderText('Describe Your Event');

  // Simulate typing in the input field
  fireEvent.change(describeEventInput, {
    target: { value: 'This is a test description.' },
  });

  // Get the value of the input field
  const inputValue = describeEventInput.value;

  // Assert that the input value is updated correctly
  expect(inputValue).toBe('This is a test description.');
});