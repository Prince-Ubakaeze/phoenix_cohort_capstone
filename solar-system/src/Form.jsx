import { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="form-section" id="contact-section">
      <h2 className="form-heading">Have Questions About Planetary Science?</h2>
      <p className="form-subheading">
        Interested in learning more about space, astronomy, or how planetary data 
        is collected and analyzed? Reach out and we'll get back to you.
      </p>

      {submitted ? (
        <p className="success-message">Thank you! Your message has been submitted successfully.</p>
      ) : (
        <div>
          {error && <p className="error-message">{error}</p>}

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName"><b>Full Name*</b></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"><b>Email*</b></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber"><b>Phone Number*</b></label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Please enter a valid phone number."
                maxLength={11}
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message"><b>Message*</b></label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength={100}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <span className="char-count">100 characters</span>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>Submit →</button>
        </div>
      )}
    </section>
  );
}

export default Form;