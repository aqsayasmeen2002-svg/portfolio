import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import location_icon from '../../assets/location-icon.png';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3e170d1b-2614-4436-9ccd-60e92197105b");

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
    }
  };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send Message  <img src={msg_icon} alt=''/></h3>
            <p>Feel free to get in touch with us throgh contact or find the contact given below.
            your sugession,question,feedback are important to us we strive to provde specal 
            service to our university community</p>
            <ul>
                <li>  <img src={phone_icon}/> +9287534216 </li>
                <li>  <img src={mail_icon}/> contact @greekstack.com </li>
                <li>   <img src={location_icon}/> 77 Massachusset Ave ,cambridge<br/>MA 02139,United States </li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter Name' required/>

            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Telephone Number' required/>

            <label>Your Message</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message' required/>
            <button type='submit' className='btn dark-btn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact;
