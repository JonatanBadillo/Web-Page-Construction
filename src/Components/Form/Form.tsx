import './Form.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaClipboard, FaRegPaperPlane, FaComments } from 'react-icons/fa'; // Importar iconos

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const sanitizeInput = (value: string) => {
    return value.replace(/[<>/]/g, "").trim();
  };

  const validateForm = () => {
    const formData = new FormData(form.current!);
    const name = sanitizeInput(formData.get("name")?.toString() || "");
    const lastName = sanitizeInput(formData.get("lastName")?.toString() || "");
    const email = sanitizeInput(formData.get("email")?.toString() || "");
    const phone = sanitizeInput(formData.get("phone")?.toString() || "");
    const subject = sanitizeInput(formData.get("subject")?.toString() || "");
    const reason = sanitizeInput(formData.get("reason")?.toString() || "");

    const formErrors: { [key: string]: string } = {};

    if (!name || name.length < 2) {
      formErrors.name = "Please enter a valid name (at least 2 characters).";
    }
    if (!lastName || lastName.length < 2) {
      formErrors.lastName = "Please enter a valid last name (at least 2 characters).";
    }
    if (!email) {
      formErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formErrors.email = "Please enter a valid email address.";
      }
    }
    if (!phone) {
      formErrors.phone = "Phone number is required.";
    } else {
      const phoneRegex = /^[0-9+\s]+$/;
      if (!phoneRegex.test(phone)) {
        formErrors.phone = "Please enter a valid phone number.";
      }
    }
    if (!subject || subject.length < 5) {
      formErrors.subject = "Subject must be at least 5 characters.";
    }
    if (!reason || reason.length < 10) {
      formErrors.reason = "Please provide a reason with at least 10 characters.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
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
      setIsSubmitted(true);
      form.current?.reset();
      setErrors({});
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="form-section">
      <h1 className="form-title"><FaComments /> Contact Us</h1> {/* Icono agregado aquí */}
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
                <label><FaUser /> Name:</label>
                <input type="text" name="name" required />
                {errors.name && <small className="error-message">{errors.name}</small>}
              </div>
              <div className="form-col">
                <label><FaUser /> Last Name:</label>
                <input type="text" name="lastName" required />
                {errors.lastName && <small className="error-message">{errors.lastName}</small>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label><FaEnvelope /> Email:</label>
                <input type="email" name="email" required />
                {errors.email && <small className="error-message">{errors.email}</small>}
              </div>
              <div className="form-col">
                <label><FaPhoneAlt /> Phone number:</label>
                <input type="tel" name="phone" required />
                {errors.phone && <small className="error-message">{errors.phone}</small>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-col-full">
                <label><FaClipboard /> Subject:</label>
                <input type="text" name="subject" placeholder="Enter the subject" required />
                {errors.subject && <small className="error-message">{errors.subject}</small>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-col-full">
                <label><FaClipboard /> Reason for contact:</label>
                <textarea name="reason" rows={4} placeholder="Please specify your reason for contacting us" required></textarea>
                {errors.reason && <small className="error-message">{errors.reason}</small>}
              </div>
            </div>
            <button type="submit"><FaRegPaperPlane /> Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
