import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CreateCardForm from "../../Pages/CreateCardForm/CreateCardForm.js";
import SignInSignUp from "../../Pages/SignInSignUp/SignInSignUp.js";

// Test that a signed in user can access the create a post form

describe("CreateCardForm component test all elements", () => {
  it("render the CreateCardForm component", () => {
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

  // Test that a signed out user cannot access the create a post form and is redirected to signinSignUp page
  it("redirects to SignInSignUp page if user is signed out", () => {
    render(
      <MemoryRouter
        initialEntries={["/src/pages/CardDisplay/CardDisplay.js"]}
        initialIndex={0}
      >
        <Routes>
          <Route
            path="/src/pages/CardDisplay/CardDisplay.js"
            element={
              <CreateCardForm
                isSignedIn={false}
                setIsSignedIn={() => {}}
                setCardData={() => {}}
                setFilter={() => {}}
              />
            }
          />
          <Route path="/src/pages/SignInSignUp/SignInSignUp.js" element={<SignInSignUp />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the SignInSignUp page is rendered
    const signInSignUpPage = screen.getByTestId=("sign-in-sign-up-page");
    // expect(signInButton).toBeInTheDocument();
  });
});
