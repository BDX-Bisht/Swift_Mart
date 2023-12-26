import styled from "styled-components";

const Contact = () => {

  document.title = "Contact | Ecommerce-Store"

  return (
    <Wrapper>

      <h2 className="common-heading">Contact Page</h2>

      <iframe className="my-5" title="Google Map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3497.209875187142!2d77.25855607445136!3d28.772998677690012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ2JzIyLjgiTiA3N8KwMTUnNDAuMSJF!5e0!3m2!1sen!2sin!4v1698851017408!5m2!1sen!2sin" style={{ border: "0", width: "100%", height: "30rem" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xwkdznay" method="Post" className="contact-inputs">
            <input type="text" placeholder="Username" name="Username" required autoComplete="off" />
            <input type="email" placeholder="Enter Email" name="Email" required autoComplete="off" />
            <textarea name="Message" cols={30} rows={10} placeholder="Enter Your Message" required autoComplete="off" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;


export default Contact;