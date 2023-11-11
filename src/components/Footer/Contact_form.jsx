import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/svg/footer/arrow.svg";
import { useEsperancitaContext } from "../../context/Context";


const Contact_form = () => {
  const navigate = useNavigate()
  const { lenguage} = useEsperancitaContext()

  const sendEmail = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    window.location.href = `mailto:email@example.com?subject=${name +" --- " + email}&body=Message: ${message}`
  
    lenguage === "ES" ? navigate('/') : navigate('/en')
  
  };
  return (
    <>
      <div className="contact__content">
        <h4 className="contact__title">Contact us</h4>
        <form
          className="contact__form"
          encType="text/plain"
        >
          <div className="contact__form-div">
            <input id="name" type="text" name="name" placeholder="name" />
          </div>

          <div className="contact__form-div">
            <input id="email" type="email" name="email" placeholder="email" />
          </div>

          <div className="contact__form-div form-area">
            <textarea
              id="message"
              name="message"
              placeholder="message"
              rows="1"
            ></textarea>
            <button className="" onClick={sendEmail}>
              <img src={Arrow} alt="" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact_form;
