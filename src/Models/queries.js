import { supabase } from './client';
import { isValid } from "postcode";
import { getCurrentUserId } from "../Models/client";


export async function insertPublicUser(user_id, first_name, last_name) {
    await supabase.from('users').insert({
            id: user_id,
            first_name: first_name,
            last_name: last_name,
        });
}

// Insert a user into the event_volunteers table when they volunteer
export async function insertEventVolunteer(user_id, event_id) {
    await supabase.from('event_volunteers')
    .insert({
        user_id: user_id,
        event_id: event_id,
    })
}

// Delete a user from the event_volunteers table when they cancel
export async function deleteEventVolunteer(event_id) {
  let user_id = await getCurrentUserId();

  await supabase.from('event_volunteers')
  .delete()
  .eq('user_id', user_id)
  .eq('event_id', event_id);
}

// Check whether currently logged in user is already in the event volunteer list
export async function checkIfVolunteer(event_id) {
  let user_id = await getCurrentUserId();

  let count = await supabase.from('event_volunteers')
  .select('user_id', { count: 'exact' })
  .eq('event_id', event_id)
  .eq('user_id', user_id);

  return count.count;
}

// count how many volunteers there are for an event
export async function countVolunteers(event_id) {
    const count = await supabase.from('event_volunteers')
    .select('user_id', { count: 'exact' })
    .eq('event_id', event_id);

    return count.count;
}

// final like ver 
export async function updateLikes(user_id, event_id) {
  const { data, error } = await supabase.from('likes').insert([
    { user_id, event_id }
  ]);

  if (error) {
    console.error('Error updating likes:', error);
  } else {
    console.log('Likes updated successfully:', data);
  }
}

// count likes
export async function countLikes(event_id) {
  const count = await supabase.from('likes')
  .select('user_id', { count: 'exact' })
  .eq('event_id', event_id);

  return count.count;
}

// Check whether currently logged in user has liked
export async function checkIfLiked(event_id) {
  let user_id = await getCurrentUserId();

  let count = await supabase.from('likes')
  .select('user_id', { count: 'exact' })
  .eq('event_id', event_id)
  .eq('user_id', user_id);

  return count.count;
}

export async function deleteLikes(user_id, event_id) {
  const { data, error } = await supabase.from('likes')
    .delete()
    .eq('user_id', user_id)
    .eq('event_id', event_id);

  if (error) {
    console.error('Error deleting like:', error);
  } else {
    console.log('Like deleted successfully:', data);
  }
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
        const { data, error } = await supabase.from('event').insert(PostData).select();
        if (error) {
            console.error("Error making post:", error);
            return false;
        } else {
            console.log("Post successful!:", data);
            // insert the creator as an event volunteer in the event_volunteers table after an even is created
            insertEventVolunteer(data[0].creator_user_id, data[0].event_id);
            return true;
        } 
    } catch (error) {
        console.error("Error with post:", error);
        return false;
    }
}

// set initial end range of selectEvent query outside the function
let endRange = 5;
// modify the range of the selectEvent limit endRange
function modifyRange(endRange) {
  return endRange + 6; // get the next 6 cards/rows in the DB
}

// selectEvent() - retrieves data from public.Events for the Card Display component
export async function selectEvent(filter, endOfPage, setEndOfPage) {
  //  modify endRange when user hits the bottom of the page then reset endOfPage useState back to false
  if(endOfPage) {
    endRange = modifyRange(endRange);
    setEndOfPage(false);
  }

  let query = supabase.from('event')
    .select(`event_id, location, postcode, has_parking, likes, is_remote_location, post_introduction, has_uneven_ground, has_bathrooms, disposal_method, equipment, title, date_timestamp, end_time, users ( first_name, last_name )`)
    .gt('end_time', 'now()') // Show only events in the future (end_time is greater than current time)
    .limit(6) // limit to 6 rows at a time
    .range(0, endRange); // the range of rows to display - modified when user hits end of page for infinite scroll functionality

  // search functionality
  if (filter !== "" && filter !== undefined && (isValid(filter) === true)) {
    query = query.ilike('postcode', `%${filter}%`); // Filter events by partial postcode match
  }
  else {
    query = query.ilike('location, title, post_introduction', `%${filter}%`); // Filter events by partial keyword match
  }

  try {
    const { data } = await query;
    return data;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}

// Select data from DB to map onto Cards
// Append the count of volunteers to the data array after the promises have resolved
export async function fetchData(filter, endOfPage, setEndOfPage) {
    try {
      let data = await selectEvent(filter, endOfPage, setEndOfPage);
      if (data) {
        const promises = data.map((card) => {
          return countVolunteers(card.event_id).then((count) => {
            card.count = count;
            return card;
          });
        });
  
        data = await Promise.all(promises);
      }
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