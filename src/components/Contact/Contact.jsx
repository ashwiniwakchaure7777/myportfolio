import React from 'react'
import "./Contact.css";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a5d93b79-ef34-44d4-bb46-7e0e739b8d3a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src='./theme_pattern.svg' alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src='./mail_icon.svg' alt=''/><p>ashwakchaure@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src='./location_icon.svg' alt=''/><p>+91 9403918337</p>
                    </div>
                    <div className="contact-detail">
                    <img src='./call_icon.svg' alt=''/><p>Pune, Maharahstra, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text'placeholder='Enter your name' ></input>
                <label htmlFor=''>Your Email</label>
                <input type='email'placeholder='Enter your email' ></input>
                <label htmlFor='' >Write your message here</label>
                <textarea name='message' rows={8} placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact