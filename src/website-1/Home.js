import './Home.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook ,faTwitter,faInstagram, faXTwitter,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
        
       <Navbar/>
       
        <div className="image">
            <h1>Find <i><b>adventures ,</b></i> you<br></br> want to talk about</h1>
            <div className="input1"><input type="text" placeholder='Search Tour'></input><i><img className="imgs" src='https://th.bing.com/th/id/OIP.rsZB5iKwX6totSXcV94swQHaHN?rs=1&pid=ImgDetMain' height="20px" width="20px"></img></i></div>
           <Link to="/Guide"><button className="float">How It Works {'>'} </button></Link>
            
        </div>
        <div className='tn-about'>
            <h1>WELCOME TO TAMILNADU...!</h1>
            <h3>A potpourri of vibrant cultures, exotic destinations and enduring memories; welcome to one of the heartlands of human civilization.</h3>
            <h2 style={{textAlign:"center"}}>Tamil Nadu - 'where stories never end.'</h2>
        </div>
        
        <div className="last">
        <h1>Required To Visit</h1>
        
        <div className="card-container">
           
        <div className="card">
            <img src="https://th.bing.com/th/id/R.86a199df9005e4b14ecc343bde72670c?rik=iaU0ECMSiTarbA&riu=http%3a%2f%2fwww.gozocabs.com%2fblog%2fwp-content%2fuploads%2f2016%2f09%2footy.jpg&ehk=Mnf3dmGYWaghk0EI6Sd%2bWfYynvp%2f6qwtLPCZlqPOnqo%3d&risl=&pid=ImgRaw&r=0" height="200px" width="100%"/>
            <h2>Hill Station</h2>
            <h4>Explore green carpet -capped roads and breathtaking vistas.</h4>
            
        </div>
        <div className="card">
            <img src="https://th.bing.com/th/id/R.663bf64d6aceadf5def3796baf19bd5b?rik=yGIzfsEZjWNAPg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1522845777697-1268ca217995%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=BeiWKyrl5%2fOl%2fQXvJyTctda%2fIB%2fVK10caX%2bw8AP0d7I%3d&risl=&pid=ImgRaw&r=0" height="200px" width="100%"/>
            <h2>Morning nature</h2>
            <h4>Explore snow-capped roads and breathtaking vistas.</h4>
            
        </div>
        <div className="card">
            <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Kovalam-Beach.jpg" alt="Mountain Tour" height="200px" width="100%"/>
            <h2>Beach </h2>
            <h4>Explore the soothing sound of waves.</h4>
            
        </div>
        <div className="card">
            <img src="https://photo.webindia123.com/gallery/28134/athirapally_Main_800.jpg" alt="Mountain Tour" height="200px" width="100%"/>
            <h2>Waterfall</h2>
            <h4>Explore  the dramatic rush of falling water.</h4>
            
        </div>
        
    </div>
        <div className="card-container">
           
        <div className="card">
            <img src="https://files.auroville.org/auroville-org/c10eba4a-5a80-45e5-b1fe-c49caba208cc.jpg" height="200px" width="100%"/>
            <h2>Aurovilla</h2>
            <h4>The City of Dawn</h4>
            <h4>Explore the Meaning of Life</h4>
            
        </div>
        <div className="card">
            <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/04/14/68a3710db58a545f1a751c4463b597c2_original.jpg" height="200px" width="100%"/>
            <h2>Infra Structure</h2>
            <h4>Explore the richness of living</h4>
            
        </div>
        <div className="card">
            <img src="https://mytourismguide.com/TouristImage/20201120145029-.jpg" alt="Mountain Tour" height="200px" width="100%"/>
            <h2>The End </h2>
            <h4>Explore the Last Pin point of India.</h4>
            
        </div>
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.MgBLHeDKI_n0vggReaM09QEsDk?w=631&h=480&rs=1&pid=ImgDetMain" alt="Mountain Tour" height="200px" width="100%"/>
            <h2>Ancient Architecture</h2>
            <h4>Explore richness of Ancient India.</h4>
            
        </div>
        
    </div>
        <div className="card-container">
           
        <div className="card">
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/image_2022-11-10_222127842-sixteen_nine.png?VersionId=0RXuB94udtnanvlfMjBEMFMEccfoRr8n" height="200px" width="100%"/>
            <h2>Ram Setu</h2>
            <h4>Explore the Beauty of Ramayanam.</h4>
            
        </div>
        <div className="card">
            <img src="https://live.staticflickr.com/65535/19487440922_0f7fc957e6_b.jpg" height="200px" width="100%"/>
            <h2>Fort's</h2>
            <h4>Explore Great Kingdom's of India.</h4>
            
        </div>
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.m_f6LIMGaP4RJc8rothmMwHaGW?w=560&h=480&rs=1&pid=ImgDetMain" alt="Mountain Tour" height="200px" width="100%"/>
            <h2>Isha Yogi</h2>
            <h4>Explore the Greatness of Yoga.</h4>
          
        </div>
        <div className="card">
            <img src="https://www.ritiriwaz.com/wp-content/uploads/2017/03/Kuchipudi-dance.jpg" alt="Mountain Tour" height="200px" width="100%"/>
            <h2>Bharatanatyam Dance</h2>
            <h4>Explore the Classical Dance of India.</h4>
            
        </div>
        
    </div>
        </div>
        <div className='explore'>
            <h2>Tamil Nadu: Discover the Land of Heritage and Diversity</h2>
           
            <h3>Explore the Wonders of Tamil Nadu :</h3>
         <p>   <pre>         </pre>   Nestled in the southern tip of India, Tamil Nadu is a vibrant state known for its rich cultural heritage, stunning landscapes, and diverse experiences. Whether you're a history enthusiast, a nature lover, or a foodie, Tamil Nadu offers something for everyone. Join us as we uncover the treasures of this fascinating destination!  </p>
         
            <h3>Best Attractions :</h3>
            <ol>
            <li><b>Majestic Temples</b>  Tamil Nadu is renowned for its architectural marvels and ancient temples. Visit the iconic Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage Site, or explore the intricate carvings of Meenakshi Amman Temple in Madurai. Each temple tells a story of the state's grand past and spiritual legacy.</li>

            <li> <b>Scenic Hill Stations</b> Escape to the serene hill stations of Tamil Nadu. Ooty, known as the "Queen of Hills," offers breathtaking views and pleasant weather. Kodaikanal, with its lush greenery and tranquil lakes, provides a perfect retreat from the hustle and bustle of city life.</li>

           <li><b>Coastal Beauty</b> Tamil Nadu's coastline is adorned with picturesque beaches. Relax on the sandy shores of Marina Beach in Chennai, or enjoy the scenic beauty of Covelong Beach and Mahabalipuram’s Shore Temple.</li>

            <li><b> Cultural Heritage</b> Experience Tamil Nadu’s vibrant culture through its festivals, dance forms, and traditional arts. Witness the grandeur of the Chennai Music Festival or immerse yourself in the colorful celebrations of Pongal, Tamil Nadu's harvest festival.</li>

            <li><b> Wildlife and Nature</b> Discover the rich biodiversity of Tamil Nadu in its national parks and wildlife sanctuaries. Explore the lush forests of Mudumalai National Park or spot the majestic tigers in Anamalai Tiger Reserve.</li>
            Must-Try Cuisine
            Tamil Nadu’s cuisine is a delightful blend of flavors and aromas. Indulge in the traditional South Indian thali, savor the crispy dosas and idlis, and don’t miss out on the spicy Chettinad dishes. For dessert, try the aromatic filter coffee and sweet delights like jigarthanda.
            </ol>
            <br/>
           
           <h3> Plan Your Trip :</h3>
           <li> Ready to explore Tamil Nadu? Our website provides detailed travel guides, itinerary suggestions, and practical information to help you plan your perfect trip. From booking accommodations to discovering hidden gems, we’re here to make your Tamil Nadu adventure unforgettable.</li>

           
        </div>
     {/* galary */}
     <body>
    <h2 style={{textAlign:"center",backgroundColor:"#180f45",color:"white",padding:"20px"}}>Tastes of TAMILNADU</h2>
    <div className='last'>
    <div className="card-container">
           
        <div className="card">
            <img src="https://melam.com/wp-content/uploads/2022/12/tamilnadu-sambar.jpg" height="200px" width="100%"/>
            <h3>Sambar</h3>
            <h4>A bowl of comfort and warmth.</h4>
            <h4>the South Indian soul food </h4>
          
        </div>
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.inLCodch_R4yzYktxyO8zAHaFj?rs=1&pid=ImgDetMain" height="200px" width="100%"/>
            <h3>Parotta</h3>
            <h4>Pair it with spicy curry!</h4>
            <h4>Flaky layers of goodness.</h4>
        </div>
        <div className="card">
            <img src="https://assets.architecturaldigest.in/photos/600849631dd783c692024e30/master/w_1600%2Cc_limit/Mumbai-Best-Biryani-Awadhi-gosht-chap-biryani-at-Ummrao.jpg" alt="Mountain Tour" height="200px" width="100%"/>
            <h3> Dum Biryani</h3>
            <h4>A fragrant symphony of spices</h4>
            <h4>Rice, meat, and magic.</h4>
        </div>
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.MyGrZAZtuEGVh_nT51eRRQHaHa?rs=1&pid=ImgDetMain" alt="Mountain Tour" height="200px" width="100%"/>
            <h3>Dose</h3>
            <h4>South India’s breakfast superstar</h4>
            <h4>Lacy crepes with coconut chutney</h4>
        </div>
        </div>
    <div className="card-container">
           
        <div className="card">
            <img src="https://somethingiscooking.com/wp-content/uploads/2015/06/ayala-fish-curry.jpg" height="200px" width="100%"/>
            <h3>Fish Curry</h3>
            <h4>Soft, simple, and satisfying</h4>
            <h4>Seafood bliss in a bowl</h4>
        </div>
        <div className="card">
            <img src="https://static.toiimg.com/photo/68631114.cms" height="200px" width="100%"/>
           <h3>Idly</h3>
           <h4>Served with love and coconut chutney</h4>
           <h4>Soft, simple, and satisfying.</h4>
        </div>
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.U2kuOSfC0Wo2Z-rPWKRppgHaHN?w=512&h=499&rs=1&pid=ImgDetMain" alt="Mountain Tour" height="200px" width="100%"/>
            <h3>Muruku</h3>
            <h4>Spirals of crunchy joy</h4>
            <h4>Twist and munch!</h4>
        </div>
        <div className="card">
            <img src="https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/Pongal.jpg?resize=300%2C200&ssl=1" alt="Mountain Tour" height="200px" width="100%"/>
            <h3>Pongal</h3>
            <h4>Rice and lentils hug</h4>
            <h4>Ghee, cashews, and warmth.</h4>
        </div>
        </div>
    </div>
</body>

     {/* footer */}
    
    <footer className="footer">
        <div className="footer-item f-logo">
           <h1> TN Tourism</h1>
        </div>

        <h1>contact us</h1>
    <form className='form'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" style={{marginLeft:0}}>Send Message</button>
        </form>
        <div className="footer-item f-social">
        <FontAwesomeIcon icon={faFacebook} className='iconf icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className='iconi icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faXTwitter} className='icont icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faYoutube} className='icony icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin} className='iconl icon'></FontAwesomeIcon>
          
        </div>
        <div className="footer-item f-contact">
            <p>Contact us: Batch-2@gmail.com<br/> Tollfree:+91 72082110</p>
            All rights reserved © 2024 Batch-2. Copyright | Terms of Use | Cookie Policy | Contact Us
        </div>
    </footer>



        
        </>
    )
}
export default Home;