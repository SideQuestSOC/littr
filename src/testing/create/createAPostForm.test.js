import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SignInSignUp from '../../Pages/SignInSignUp/SignInSignUp.js';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';
import { supabase } from '../../Models/client.js';


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
});