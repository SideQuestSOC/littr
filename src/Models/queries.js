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
    await supabase.auth.signUp({
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
    })
    // After the signup is successful, the 'then' block is executed.
    .then((response) => {
        // The 'response' parameter contains information about the signed-up user.
        let user_id = response.data.user.id;
        let first_name = response.data.user.user_metadata.first_name;
        let last_name = response.data.user.user_metadata.last_name;
        // insertPublicUser() is called to insert the signed-up user into the public.users table.
        insertPublicUser(user_id, first_name, last_name);
        return true;
    })
    .catch((err) => { 
        console.log(err); 
        return false;
    });
}
