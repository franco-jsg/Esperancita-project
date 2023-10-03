import { useRef } from "react";

// const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  console.log("Mail enviado!")

//   emailjs.sendForm(
//     "service_nyafgyj",
//     "template_shyy32s",
//     form.current,
//     "1io3oV6uKN71Ho0lS"
//   );
  e.target.reset();
};

const Contact_form = () => {
  return (
    <>
      <div className="contact__content">
        <h3 className="contact__title">Contact us</h3>

        <form  onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-div">
            {/* <label className="contact__form-tag">Name</label> */}
            <input
              type="text"
              name="name"
              className="contact__form-input"
              placeholder="name"
            />
          </div>

          <div className="contact__form-div">
            {/* <label className="contact__form-tag">Email</label> */}
            <input
              type="email"
              name="email"
              className="contact__form-input"
              placeholder="email"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            {/* <label className="contact__form-tag">Message</label> */}
            <textarea
              name="message"
              className="contact__form-input"
              placeholder="message"
            ></textarea>
          </div>

          <button className="">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact_form;
