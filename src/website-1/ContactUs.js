import Footer from "./footer";
import Navbar from "./Navbar";


export default function Contact(){
    return(
        <>
        <Navbar/>
        <section id="contact-us">
        <h1>Contact Us</h1>
        <img src="https://tse2.mm.bing.net/th?id=OIP.CHWE0m4WNlxaNoa_3WucQgHaHa&pid=Api&P=0&h=180" alt="Contact Us" />
         <div className='middle'>
        <div>
        <p>
          We are here to assist you with any inquiries or issues. You can reach us through the following methods:
        </p>
        <ul>
          <li>Phone: (123) 456-7890</li>
          <li>Email: support@example.com</li>
          <li>Address: 123 Travel St, City, Country</li>
        </ul>
        <p>You can also use the contact form below to send us a message directly.</p>
        </div>
         </div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" style={{marginLeft:0 ,marginBottom:"10px"}}>Send Message</button>
        </form>
      </section>
      <Footer/>
      </>
    )
}