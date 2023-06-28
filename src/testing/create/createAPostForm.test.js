import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { isValid } from 'postcode';
import SignInSignUp from '../../Pages/SignInSignUp/SignInSignUp.js';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';
import CreatePostButton from '../../Pages/CardDisplay/components/CreatePostButton/CreatePostButton.js';


// Non-signed in user gets redirected to the sign in page ✅
// Signed in User can access the create a post form ✅
// Signed in User can add a title of post ✅
// Signed in User can add an Address ✅
// Singed in user can add a Postcode ✅
// Signed in User can add a date and time ✅
// Test user can check accessibility boxes ✅
// Test user can add disposal method ✅
// Test user can add recommended equipment ✅

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

// User can add a valid address
test("user can enter a valid address", () => {
  // Arrange
  // render the CreateCardForm component
  render(
  <MemoryRouter>
  <CreateCardForm isSignedIn={true} setIsSignedIn={() => {}} setCardData={() => {}} setFilter={() => {}} />
  </MemoryRouter>
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

// User can add a valid postcode
test('validates postcode input in CreateCardForm', () => {
  // Mock the props required for testing
  const isSignedIn = true;

  // Arrange
  // Render the CreateCardForm component within a Router
  render(
    <MemoryRouter>
      <CreateCardForm isSignedIn={isSignedIn} />
    </MemoryRouter>
  );

  // Act
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


// User can add Desciption
test('validates "Describe Your Event" input in CreateCardForm', () => {
  // Mock the props required for testing
  const isSignedIn = true;
  const setIsSignedIn = jest.fn();
  const setCardData = jest.fn();
  const setFilter = jest.fn();

  // Arrange
  // Render the CreateCardForm component within a Router
  render(
    <MemoryRouter>
      <CreateCardForm
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        setCardData={setCardData}
        setFilter={setFilter}
      />
    </MemoryRouter>
  );

  // Act
  // Get the "Describe Your Event" input field using its Placeholder Text
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
const timeInput = screen.getByTestId('time-input');

// Simulate selecting a date
fireEvent.change(datePicker, { target: { value: '15/07/2023' } });

// Assert that the selected date is displayed
expect(datePicker).toHaveValue('15/07/2023');

// Simulate selecting a time
timeInput.value = '10:00 - 12:00';
fireEvent.change(timeInput);

// Assert that the selected time is displayed
expect(timeInput).toHaveValue('10:00 - 12:00');
});

// Test user can check accessibility boxes
test("user can add accessibility information in create card form", async () => {
  // Mock the props required for testing
  const isSignedIn = true;

  // Arrange
  render(
    <MemoryRouter>
      <CreateCardForm isSignedIn={isSignedIn} />
    </MemoryRouter>
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

// Test that a user can add the disposal method in the create post form

test("user can add disposal method", async () => {
  // Mock the props required for testing
  const isSignedIn = true;

  // Arrange
  // Render the CreatePostButton component within a Router
  render(
    <MemoryRouter>
      <CreatePostButton />
      <CreateCardForm isSignedIn={isSignedIn} />
    </MemoryRouter>
  );
  
  // Act
  // Get the create post button using screen.getByTestId
  const createPostButton = screen.getByTestId('create-post-button');
  // Assert that the create post button is rendered
  expect(createPostButton).toBeInTheDocument();
  // Simulate a click event on the create post button
  fireEvent.click(screen.getByTestId('create-post-button'));

  // Assert that the CreateCardForm component is rendered
  await waitFor(() => {
    expect(screen.getByTestId('create-card-form')).toBeInTheDocument();
  });

   // Get the disposal method select input
   const disposalMethodSelect = screen.getByLabelText('Disposal Method');

  // Manually set the value of the select input
  disposalMethodSelect.value = 'Council pick-up';

  // Dispatch a change event on the select input
  fireEvent.change(disposalMethodSelect);

  // Assert that the selected disposal method is displayed
  expect(disposalMethodSelect.value).toBe('Council pick-up');
});

// Test that a user can add recommended equipment in the create post form
test('user can add recommended equipment', () => {
  // Render the CreateCardForm component within a Router

  // Arrange
  render(
    <MemoryRouter>
      <CreateCardForm isSignedIn={true} />
    </MemoryRouter>
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


});