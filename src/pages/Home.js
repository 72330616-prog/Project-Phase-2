import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="head">
        <h1>Build Your Body</h1>
        <p>Transform Your Life Today</p>
        <Link to="/Register">
          <button>Join Now</button>
        </Link>
      </header>

      <section className="hours">
        <h2>Opening Hours</h2>
        <p>Mon-Thu: 6 AM - 10 PM</p>
        <p>Fri-Sat: 9 AM - 8 PM</p>
        <p>Sunday: Closed</p>
      </section>
    </div>
  );
}

export default Home;
