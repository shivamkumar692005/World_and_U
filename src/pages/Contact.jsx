export const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    
    }


  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="false"
            className="form-control"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="false"
            className="form-control"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            autoComplete="false"
            rows="10"
            className="form-control"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
