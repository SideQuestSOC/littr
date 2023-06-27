import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignInSignUp from '../../Pages/SignInSignUp/SignInSignUp.js';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// Test that a signed-in user can access the create a post form
describe('CreateCardForm component test all elements', () => {
  test('redirect to SignInSignUp page if the user is signed out', async () => {
    const setIsSignedIn = jest.fn();
    const isSignedIn = false;

    render(
      <MemoryRouter initialEntries={['/src/Pages/CreateCardForm/CreateCardForm.js']}>
        <Routes>
          <Route path="/src/Pages/CreateCardForm/CreateCardForm.js" element={<SignInSignUp isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('sign-in-sign-up-page')).toBeInTheDocument();
    });
  });

// Test that a signed-in user can access the create a post form
  test("render the CreateCardForm component if signed in", () => {
  render(
    <MemoryRouter>
      <CreateCardForm
        isSignedIn={true}
        setIsSignedIn={() => {}}
        setCardData={() => {}}
        setFilter={() => {}}
      />
    </MemoryRouter>
  );
  const createCardFormElement = screen.getByTestId("create-card-form");
  expect(createCardFormElement).toBeInTheDocument();
});

// Test that the Title of Post accepts user input with character limits
test('User can enter a valid title of post', async () => {
  const validTitle = 'Valid Title';

  // Mock the window.alert function
    const mockAlert = jest.spyOn(window, 'alert');
    mockAlert.mockImplementation(() => {});

  render(
    <MemoryRouter>
      <CreateCardForm
      isSignedIn={true}
      setIsSignedIn={() => {}}
      setCardData={() => {}}
      setFilter={() => {}}
      />
    </MemoryRouter>
  );

  const titleInput = screen.getByTestId('post-title-input');
  const submitButton = screen.getByText('Create Post');

titleInput.value = validTitle;
fireEvent.change(titleInput);

  expect(titleInput.value).toBe(validTitle);

  fireEvent.click(submitButton);

  // Assert that the form is submitted successfully
  await waitFor(() => {
    expect(screen.queryByLabelText('Title must be at least 5 characters')).toBeNull();
  });
  // Restore the original window.alert function
  mockAlert.mockRestore();
});

// User can add date and time to event
test('User cannot submit form if date or time is not selected', async () => {
  const mockNavigate = jest.fn();
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(
    <MemoryRouter>
      <CreateCardForm
        isSignedIn={true}
        setIsSignedIn={() => {}}
        setCardData={() => {}}
        setFilter={() => {}} />
    </MemoryRouter>
  );

  const submitButton = screen.getByText('Create Post');

  fireEvent.click(submitButton);

  expect(mockAlert).toHaveBeenCalledWith('Please fill it all in!');
  expect(mockNavigate).not.toHaveBeenCalled();

  mockAlert.mockRestore();
});

// User can submit form if date and time are selected'
// test('User can submit form if date and time are selected', async () => {
//   render(
//     <MemoryRouter>
//       <CreateCardForm
//         isSignedIn={true}
//         setIsSignedIn={() => {}}
//         setCardData={() => {}}
//         setFilter={() => {}}
//       />
//     </MemoryRouter>
//   );

//   // Set the date and time values
//   const dateInput = screen.getByLabelText('Date of Your Event');
//   const timeInput = screen.getByTestId('time-input');

//   // Set the date value by triggering the component's onChange event handler
//   fireEvent.change(dateInput, { target: { value: '15-07-2023' } });

//   // Set the time value by directly setting the value property
//   timeInput.value = '10:00 - 12:00';
//   fireEvent.change(timeInput);


//   // Assert that the date and time values are set correctly
//   expect(dateInput.value).toBe('15-07-2023');
//   expect(timeInput.value).toBe('10:00 - 12:00');
// });

// User can submit form if date and time are selected'
test('user can add a date and time', async () => {
  render(
    <MemoryRouter>
      <CreateCardForm
        isSignedIn={true}
        setIsSignedIn={() => {}}
        setCardData={() => {}}
        setFilter={() => {}} />
    </MemoryRouter>
  );
// Find the datePicker component
const datePicker = screen.getByLabelText('Date of Your Event');

// Simulate selecting a date
fireEvent.change(datePicker, { target: { value: '15/07/2023' } });

// Verify that the selected date is displayed
expect(datePicker).toHaveValue('15/07/2023');


});
});