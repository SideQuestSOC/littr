import { supabase } from './client';

export async function insertPublicUser(user_id, first_name, last_name) {
    await supabase.from('users')
              .insert({
                id: user_id,
                first_name: first_name,
                last_name: last_name,
              })
  }