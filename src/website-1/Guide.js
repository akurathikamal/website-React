import React from 'react';
import './Guide.css';
import Navbar from './Navbar';
import Footer from './footer';

function Guide() {
  return (
    <div className="app">
      <Navbar/>
      <nav>
        <ul>
          <li><a href="#refund-policy">Refund Policy</a></li>
          <li><a href="#guide-to-use">Guide to Use</a></li>
          <li><a href="#payment-process">Payment Process</a></li>
          <li><a href="#vehicle-facility">Vehicle Facility</a></li>
          <li><a href="#how-to-book">How to Book</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>

      <section id="refund-policy">
        <h1>Refund Policy</h1>
        <img src="https://th.bing.com/th/id/R.1fa7578283d62eccd381c0e01e189633?rik=ZZUuvkftW23i6w&riu=http%3a%2f%2funder30ceo.com%2fwp-content%2fuploads%2f2015%2f01%2fRefund-Policy.jpg&ehk=NuwYfW4MF5jzR3YOVK72JM00Y4zVTrDWl0ovVzLkTv8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Refund Policy" width="500" height="300" />
        <div className='middle'>
        <p>
          At [Company Name], we strive to ensure your satisfaction. If you are not completely satisfied with your purchase, you can request a refund within 30 days of purchase. Please note the following conditions:
        </p>
        <ul>
          <li>Refunds are processed within 7-10 business days.</li>
          <li>Items must be returned in their original condition.</li>
          <li>Refunds are issued to the original payment method.</li>
        </ul>
        <p>For more details or to request a refund, please contact our support team.</p>
        </div>
      </section>

      <section id="guide-to-use">
        <h1>Guide to Use</h1>
        <img src="https://cdn.prod.website-files.com/63a0097c0612e3dd77433b37/648aefc983e42b191aff8260_Essential%20Elements%20of%20Effective%20Website%20Design%20A%20Comprehensive%20Guide.jpg" alt="Guide to Use" width="500" height="300" />
       <div className='middle'>

        <p>
          Welcome to our tourism page! Here’s a brief guide to help you navigate and make the most of our site:
        </p>
        <ol>
          <li>Explore our various travel packages by browsing through the "Packages" section.</li>
          <li>Use the search feature to find specific destinations or services.</li>
          <li>Check out the "Reviews" section to see feedback from other travelers.</li>
          <li>Contact us via the "Contact Us" section if you need any assistance or have questions.</li>
        </ol>
       </div>
      </section>

      <section id="payment-process">
        <h1>Payment Process</h1>
        <img src="https://payspacemagazine.com/wp-content/uploads/2018/10/paymentgateaway.jpg" alt="Payment Process" width="500" height="300" />
        <div className='middle'>
        <p>
          Our payment process is designed to be secure and straightforward. Follow these steps to complete your payment:
        </p>
        <ol>
          <li>Select your desired package and proceed to checkout.</li>
          <li>Enter your payment details on the secure payment page.</li>
          <li>Review your order summary and confirm your payment.</li>
          <li>You will receive a confirmation email once the payment is successful.</li>
        </ol>
        <p>We accept various payment methods including credit/debit cards and online payment systems.</p>
      </div>
      </section>

      <section id="vehicle-facility">
        <h1>Vehicle Facility</h1>
        <img src="https://dtnext-prod.s3.ap-south-1.amazonaws.com/imported/import/Articles/2018/Sep/201809080224191524_Ashok-Leyland-inaugurates-electric-vehicle-facility-in-Tamil_SECVPF.gif" alt="Vehicle Facility" width="500" height="300"/>
       <div className='middle'>
        <p>
          We offer a range of vehicle facilities to make your travel comfortable. Our options include:
        </p>
        <ul>
          <li>Luxury cars for a premium travel experience.</li>
          <li>Standard vehicles for everyday needs.</li>
          <li>Specialty vehicles for group travel and special events.</li>
        </ul>
        <p>To book a vehicle, visit our "Booking" section or contact our support team for assistance.</p>
      </div>
      </section>

      <section id="how-to-book">
        <h1>How to Book</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyayndZNxDDkFnd9Kh5ibiUcHdp-49FS8-bw&s" alt="How to Book"   width="300" height="200"/>
        <div className='middle'>
        <p>
          Booking with us is simple and quick. Here’s how you can book your travel package:
        </p>
        <ol>
          <li>Browse through our list of available packages.</li>
          <li>Select the package that suits your needs and click "Book Now."</li>
          <li>Fill in your details and preferences on the booking form.</li>
          <li>Review your booking summary and proceed to payment.</li>
          <li>Receive a booking confirmation via email with all the details.</li>
        </ol>
        <p>If you have any questions or need help with your booking, feel free to contact us.</p>
        </div>
      </section>

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
    </div>
  );
}

export default Guide;