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