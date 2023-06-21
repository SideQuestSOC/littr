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

// Get the currently signed in users id
export async function getCurrentUserId() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// like func added 

export const incrementLikes = async (event_id) => {
  try {
    // Increment the likes count in the 'event' table
    const { data, error } = await supabase
      .from('event')
      .update({ likes: supabase.sql('likes + 1') })
      .match({ id: event_id });

    if (error) {
      // Handle the error if necessary
      console.error('Error incrementing likes:', error.message);
      return;
    }

    if (data) {
      // Likes incremented successfully
      console.log('Likes incremented successfully');
    }
  } catch (error) {
    // Handle any other errors
    console.error('Error incrementing likes:', error.message);
  }
};




// Sign out the user 
export async function signOut() {
  await supabase.auth.signOut();
}