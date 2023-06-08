import React, { useState } from 'react';
import { supabase } from '../../Models/client';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function insertPublicUser(user_id, first_name, last_name) {
    await supabase.from('users')
              .insert({
                id: user_id,
                first_name: first_name,
                last_name: last_name,
              })
  }

  async function handleSubmit(e) {
    e.preventDefault();
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='firstName'
          name='firstName'
          onChange={handleChange}
        />
        <input
          placeholder='lastName'
          name='lastName'
          onChange={handleChange}
        />
        <input
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          placeholder='password'
          name='password'
          type='password'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
