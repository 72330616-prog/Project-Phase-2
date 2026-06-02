function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <p>Email: info@tyregym.com</p>
      <p>Phone: +961 70 000 000</p>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
