import { supabase } from './client';

// insertPublicUser() - inserts data into the public.users table, it is called after
// the supabaseSignUp() function has inserted a new user into the auth.users table
export async function insertPublicUser(user_id, first_name, last_name) {
    await supabase.from('users')
        .insert({
            id: user_id,
            first_name: first_name,
            last_name: last_name,
        });
}

// supabaseSignUp() - is used to sign up a user using the Supabase authentication service.
// It takes in a formData object containing user signup data.
export async function supabaseSignUp(formData) {
    const data = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        // additional 'metadata' can be inserted into the auth.users table 
        // using the 'options' property
        options: {
            data: {
                first_name: formData.firstName,
                last_name: formData.lastName,
            }
        }
    });

    if(data.error)
    {
        console.log(data.error); 
        // return false to toggle on error message display for user
        return false;
    }
    // If no user sign up error, insert data into the public.users table
    else
    {
        let user_id = data.data.user.id;
        let first_name = data.data.user.user_metadata.first_name;
        let last_name = data.data.user.user_metadata.last_name;
        // insertPublicUser() is called to insert the signed-up user into the public.users table.
        insertPublicUser(user_id, first_name, last_name);
        return true;
    }
}

//  supabaseEventInsert() - inserts new events into public.Events table from Create a Post page
export async function supabaseEventInsert(PostData) {
    try {
        const { data, error } = await supabase.from('event').insert(PostData);
        if (error) {
            console.error("Error making post:", error);
        } else {
            console.log("Post successful!:", data);
        } 
    } catch (error) {
        console.error("Error with post:", error);
    }
}

// selectEvent() - retrieves data from public.Events for the Card Display component
export async function selectEvent() {
    const { data, error } = await supabase.from('event')
    .select(`location, postcode, has_parking, likes, is_remote_location, post_introduction, has_uneven_ground, has_bathrooms, disposal_method, equipment, title, date_timestamp, 
    users ( first_name, last_name )`);
    
    if (error) {
      // Handle error
      console.error(error);
      return null;
    }
    
    return data;
};

// Select data from DB to map onto Cards
export async function fetchData() {
    try {
      const data = await selectEvent();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export function formatDate(unformattedDate) {
    // Create a new Date object using the original date string
    const dateObj = new Date(unformattedDate);

    // Extract the day, month, and year components
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Months are zero-based, so we add 1
    const year = dateObj.getFullYear();

    // Assemble the components in the desired format
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

    return formattedDate;
  }

  export function formatTime(unformattedTime) {
    // Create a new Date object using the original date string
    const dateObj = new Date(unformattedTime);

    // Extract the hours and minutes components
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');

    // Assemble the components in the desired format
    const formattedTime = `${hours}:${minutes}`;
    
    return formattedTime;
  }