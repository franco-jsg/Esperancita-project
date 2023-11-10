
import Arrow from "../../assets/svg/footer/arrow.svg"

const sendEmail = (e) => {
  e.preventDefault();

  console.log("Mail enviado!");

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
        <h4 className="contact__title">Contact us</h4>
        <form onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-div">
            <input
              type="text"
              name="name"
              placeholder="name"
            />
          </div>

          <div className="contact__form-div">
            <input
              type="email"
              name="email"
              placeholder="email"
            />
          </div>

          <div className="contact__form-div form-area">
            <textarea
              name="message"
              placeholder="message"
              rows="1"
            ></textarea>
            <button className=""><img src={Arrow} alt="" /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact_form;
