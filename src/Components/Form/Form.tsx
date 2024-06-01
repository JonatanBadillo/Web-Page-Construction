import './Form.css'

const Form = () => {
  return (
    <div>
        <form>
        <label>Name:</label>
        <input type="text" name="name" />

        <label>Last Name:</label>
        <input type="text" name="lastName" />

        <label>Email:</label>
        <input type="email" name="email" />



        <label>Phone number:</label>
        <input type="tel" name="phone" />

        <label>Reason for contact:</label>
        <select name="reason">
        <option value="inquiry">Project Inquiry</option>
          <option value="doubt">Doubt</option>
          <option value="complain">Complain</option>
          <option value="suggestion">Suggestion</option>

        </select>



      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Form