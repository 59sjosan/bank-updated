import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='maparea container'>
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Your message</label>
              <textarea
                className='form-control'
                id='message'
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type='submit' className='btn themebutton'>Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="mapouter" style={{ position: 'relative', textAlign: 'right', height: '500px', width: '100%' }}>
            <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none!important', height: '100%', width: '100%' }}>
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=royal%20bank&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                style={{ height: '100%', width: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
