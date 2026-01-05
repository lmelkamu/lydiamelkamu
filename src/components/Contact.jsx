import "../styles/contact.css";

function Contact() {
  return (
    <main className="contact-page" id = "contact">
      <section className="contact-container">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <p>
            <span className="label">Email:</span>
            <a href="mailto:lydiamelkamu24@gmail.com">lydiamelkamu24@gmail.com</a>
          </p>

          <p>
            <span className="label">Phone:</span>
            <a href="tel:+13016333483">(301) 633-3482</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
