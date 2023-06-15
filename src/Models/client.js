import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Functionality for signing in a user
export async function SignInUser(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
  
      if (error) {
        // Handle the error here
        console.error('Sign-in error:', error);
        return false;
      }
      else {
        // Sign-in successful
        console.log('Sign-in successful:', data);
        return true;
      }
    } catch (error) {
      // Handle any other errors that may occur
      console.error('Error during sign-in:', error);
      return false;
    }
}

// Check if a user is signed in
export async function isSessionSignedIn() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.log(error);
      return false;
    }
    else {
      console.log(data.session);
      if(data.session) {
        console.log("A user is logged in.", data);
        return true;
      }
      else {
        console.log("A user is not logged in.", data);
        return false;
      }
    }
  } catch (error) {
    // Handle any other errors that may occur
    console.error(error);
    return false;
  }
}

// Sign out the user 
export async function signOut() {
  await supabase.auth.signOut();
}