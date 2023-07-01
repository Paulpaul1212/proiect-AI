import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post('/register', formData)
      .then((response) => {
        // Procesează răspunsul de la server
        console.log(response.data);
      })
      .catch((error) => {
        // Procesează erorile
        if (error.response) {
          // Eroare de la server
          console.log(error.response.data);
        } else if (error.request) {
          // Nu s-a primit răspuns de la server
          console.log(error.request);
        } else {
          // Eroare în timpul cererii
          console.log(error.message);
        }
      });
  };
  

  return (
    <div>
      <h2>Înregistrare</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nume" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Parolă" onChange={handleChange} />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirmare parolă"
          onChange={handleChange}
        />
        <button type="submit">Înregistrează-te</button>
      </form>
    </div>
  );
};

export default Register;
