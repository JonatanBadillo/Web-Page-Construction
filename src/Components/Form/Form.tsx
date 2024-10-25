import './Form.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      form.current!,
      import.meta.env.VITE_EMAILJS_USER_ID!
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="form-section">
      <h1 className="form-title">Contact Us</h1>
      <div className="form-wrapper">
        <form ref={form} className="form-container" onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-col">
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-col">
              <label>Last Name:</label>
              <input type="text" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-col">
              <label>Phone number:</label>
              <input type="tel" name="phone" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-full">
              <label>Subject:</label>
              <input type="text" name="subject" placeholder="Enter the subject" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-full">
              <label>Reason for contact:</label>
              <textarea name="reason" rows={4} placeholder="Please specify your reason for contacting us" required></textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
