import './Form.css';

const Form = () => {
  return (
    <div className="form-section">
      <h1 className="form-title">Contact Us</h1>
      <div className="form-wrapper">
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label>Name:</label>
              <input type="text" name="name" />
            </div>
            <div className="form-col">
              <label>Last Name:</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label>Email:</label>
              <input type="email" name="email" />
            </div>
            <div className="form-col">
              <label>Phone number:</label>
              <input type="tel" name="phone" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-full">
              <label>Reason for contact:</label>
              <select name="reason">
                <option value="inquiry">Project Inquiry</option>
                <option value="doubt">Doubt</option>
                <option value="complain">Complain</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
