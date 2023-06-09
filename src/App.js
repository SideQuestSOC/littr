import React, { useState } from 'react';
import { supabase } from './Client';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error('Error signing up:', error);
        return;
      }

      const userId = user.id;

      const { data, error: insertError } = await supabase
        .from('public_users')
        .insert([
          {
            id: userId,
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
        ]);

      if (insertError) {
        console.error('Error inserting user:', insertError);
        return;
      }

      console.log('User created and data inserted successfully:', data);
    } catch (error) {
      console.error('Error:', error);
    }
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
