import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#0b74de' }}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          style={{ display: 'block', margin: '10px 0', padding: '8px' }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          style={{ display: 'block', margin: '10px 0', padding: '8px' }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          style={{ display: 'block', margin: '10px 0', padding: '8px' }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          style={{
            padding: '10px',
            backgroundColor: '#0b74de',
            color: 'white',
            border: 'none'
          }}
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;