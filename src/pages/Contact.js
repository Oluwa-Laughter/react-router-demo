import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((data) => ({
      ...data,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">What's your First name?</label>
      <input
        id="firstName"
        placeholder="Input your first name"
        value={formData.firstName}
        onChange={handleInputChange}
        type="text"
        required
      />

      <label htmlFor="lastName">What's your Last name?</label>
      <input
        id="lastName"
        placeholder="Input your last name"
        value={formData.lastName}
        onChange={handleInputChange}
        type="text"
        required
      />

      <label htmlFor="email">What's your Email address?</label>
      <input
        id="email"
        placeholder="Input your email address"
        value={formData.email}
        onChange={handleInputChange}
        type="email"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
