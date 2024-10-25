import './Form.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const formData = new FormData(form.current!);
    const name = formData.get("name")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const reason = formData.get("reason")?.toString().trim();

    if (!name || !lastName || !email || !phone || !subject || !reason) {
      alert("Please fill in all fields.");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\s]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      form.current!,
      import.meta.env.VITE_EMAILJS_USER_ID!
    )
    .then((result) => {
      console.log(result.text);
      setIsSubmitted(true); // Mostrar mensaje de éxito
      form.current?.reset(); // Limpiar formulario
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="form-section">
      <h1 className="form-title">Contact Us</h1>
      <div className="form-wrapper">
        {isSubmitted ? (
          <div className="success-message">
            <h2>Thank you for reaching out!</h2>
            <p>Your message has been sent successfully. We will get back to you shortly.</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Form;
