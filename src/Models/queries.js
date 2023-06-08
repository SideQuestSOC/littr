import { supabase } from './client';

export async function insertPublicUser(user_id, first_name, last_name) {
    await supabase.from('users')
                  .insert({
                    id: user_id,
                    first_name: first_name,
                    last_name: last_name,
                  })          
}

export async function supabaseSignUp(formData) {
    await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
    })
    .then((response) => {
    let user_id = response.data.user.id;
    let first_name = response.data.user.user_metadata.first_name;
    let last_name = response.data.user.user_metadata.last_name;
    insertPublicUser(user_id, first_name, last_name);
    })
    .catch((err) => { alert(err) });
}