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
      });
  
      if (error) {
        // Handle the error here
        console.error('Sign-in error:', error);
        // You can also throw the error to propagate it to the caller if needed
        throw error;
      }
      // Sign-in successful, handle the data
      console.log('Sign-in successful:', data);
      // Do something with the signed-in user data
    } catch (error) {
      // Handle any other errors that may occur
      console.error('Error during sign-in:', error);
      // You can also throw the error to propagate it to the caller if needed
      throw error;
    }
  }