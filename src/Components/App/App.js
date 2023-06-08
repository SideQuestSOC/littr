import React, { useState } from 'react';

// import queries
import { supabaseSignUp } from '../../Models/queries';

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

  function handleSubmit(e) {
    e.preventDefault();
    supabaseSignUp(formData);
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