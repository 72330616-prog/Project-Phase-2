function Register() {
  return (
    <div className="form-section">
      <h1>Register</h1>

      <form>
        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <select>
          <option>Weight Training</option>
          <option>Cardio</option>
          <option>CrossFit</option>
          <option>Yoga</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
