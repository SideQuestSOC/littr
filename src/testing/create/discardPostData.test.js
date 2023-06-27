// This is still work in progress!

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';

test('user can discard inputted data', async () => {
  render(
    <Router>
      <CreateCardForm />
    </Router>
  );

  // Simulate inputting data

//   fireEvent.change(screen.getByPlaceholderText("Title of Post"), {
//     target: { value: 'Test Title' }
//   });
  fireEvent.change(screen.getByPlaceholderText("Address"), {
    target: { value: 'Test Address' }
  });
  fireEvent.change(screen.getByPlaceholderText("Postcode"), {
    target: { value: '12345' }
  });
  fireEvent.change(screen.getByPlaceholderText("Describe Your Event"), {
    target: { value: 'Test Description' }
  });

  // Assert that the input fields have the correct values

  // expect(screen.getByPlaceholderText("Title of Post").value).toBe('Test Title');
  expect(screen.getByPlaceholderText("Address").value).toBe('Test Address');
  expect(screen.getByPlaceholderText("Postcode").value).toBe('12345');
  expect(screen.getByPlaceholderText('Describe Your Event').value).toBe('Test Description');

  // Simulate clicking the discard button
  fireEvent.click(screen.getByText('Discard'));

  // Assert that the input fields are cleared

  // expect(screen.queryByPlaceholderText("Title of Post")).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText("Address")).toBeNull();
  expect(screen.queryByPlaceholderText("Postcode")).toBeNull();
  expect(screen.queryByPlaceholderText('Describe Your Event')).twoBeNull();
});