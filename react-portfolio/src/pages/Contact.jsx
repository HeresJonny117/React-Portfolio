import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) setErrors({ ...errors, [name]: 'This field is required' });
    else if (name === 'email' && !validateEmail(value)) setErrors({ ...errors, email: 'Invalid email format' });
    else setErrors({ ...errors, [name]: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span>{errors.name}</span>}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <span>{errors.email}</span>}
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;