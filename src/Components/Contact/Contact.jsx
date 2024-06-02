import './Contact.css';
import msg_icon from "../edusity_assets/msg-icon.png";
import mail_icon from "../edusity_assets/mail-icon.png";
import phone_icon from "../edusity_assets/phone-icon.png";
import location_icon from "../edusity_assets/location-icon.png";
import white_icon from "../edusity_assets/white-arrow.png";
import React from "react";

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef9aa4a5-52ca-4a7c-bcb9-e656a4d7899e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };
  return (
  <div className="contact">
    <div className="contact-col">
      <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea libero maxime dolores unde quidem, eius magni recusandae quisquam accusamus esse quam voluptatum odit assumenda! Eos maiores omnis minus quod.</p>
      <ul>
    <li><img src={mail_icon} alt="" />Contact@ShafaliSonker.com</li>
        <li><img src={phone_icon} alt="" />+111-12-3455</li>
        <li><img src={location_icon} alt="" />09 Mount Corben Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
    <div className="contact-col">
     <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name='name' placeholder='Enter your name' required/>
      <label>Phone Number</label>
      <input type="tel" placeholder='Enter your mobile number' required/>
      <label>Write your message here</label>
    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
    <button className="btn dark-btn" type='submit'>Submit now <img src={white_icon} alt="" /></button>
    <span>{result}</span>
     </form>
    </div>
  </div>
  )
}

export default Contact
