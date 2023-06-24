import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateCardForm from '../../Pages/CreateCardForm/CreateCardForm.js';


// Test that a signed in user can access the create a post form

describe("CreateCardForm component", () => {
    it("render the CreateCardForm component", () => {
    render(
        <BrowserRouter>
          <CreateCardForm isSignedIn={true} setIsSignedIn={() => {}} setCardData={() => {}} setFilter={() => {}} />
        </BrowserRouter>
      );
      const createCardFormElement = screen.getByTestId("create-card-form");
      expect(createCardFormElement).toBeInTheDocument();
    });
});