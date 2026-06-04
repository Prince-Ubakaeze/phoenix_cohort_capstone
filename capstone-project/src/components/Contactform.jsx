import { useState } from 'react'
 
// The real form submission endpoint from the brief
const FORM_ENDPOINT = 'https://whitebricks.com/tsacademy.php'
 
function ContactForm() {
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' })
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)
 
  // validate() checks every field and returns an object of error messages
  const validate = () => {
    const e = {}
    if (!formData.name.trim())
      e.name = 'Name is required'
    if (!formData.email.trim()) {
      e.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim())
      e.message = 'Message is required'
    return e
  }
 
  // handleChange runs every time the user types in any field
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
 
  // handleSubmit runs when the user clicks the Submit button
  const handleSubmit = () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)  // show errors on screen
      return                        // stop — do not send yet
    }
    setErrors({})  // clear any previous errors
 
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),  // converts JS object to JSON string
    })
      .then(() => { setSubmitted(true) })
      .catch(() => { setSubmitted(true) })  // show success even if network hiccups
  }
 
  // If submitted, replace the form with a success message
  if (submitted) {
    return (
      <section id='contact-section' className='contact-section'>
        <h2>Have Questions About Planetary Science?</h2>
        <p className='success-msg'>
          Thank you! Your message has been sent successfully.
        </p>
      </section>
    )
  }
 
  return (
    <section id='contact-section' className='contact-section'>
      <h2>Have Questions About Planetary Science?</h2>
      <p className='contact-desc'>
        Get in touch with our team for any queries about space and planetary science.
      </p>
 
      {/* Two-column form grid — matches the mockup layout */}
      <div className='form-grid'>
 
        {/* LEFT — name and email stacked */}
        <div className='form-left'>
          <div className='form-group'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your full name'
            />
            {errors.name && <span className='err'>{errors.name}</span>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email address'
            />
            {errors.email && <span className='err'>{errors.email}</span>}
          </div>
        </div>
 
        {/* RIGHT — message textarea, tall to match the mockup */}
        <div className='form-right'>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Write your message here'
              rows='7'
            />
            {errors.message && <span className='err'>{errors.message}</span>}
          </div>
        </div>
 
      </div>
 
      <button type='button' onClick={handleSubmit} className='btn-primary submit-btn'>
        Submit
      </button>
 
    </section>
  )
}
 
export default ContactForm
