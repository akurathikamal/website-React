import React from 'react';
import './StoreList.css'; 
import Navbar from './Navbar';
import Footer from './footer';

const chennaiImg = 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/webp/public/2024-04/BeFunky-collage%20-%202024-04-17T175559.451.jpg.webp?itok=5z6HtQmw';
const maduraiImg = 'https://i0.wp.com/visitsheringham.co.uk/wp-content/uploads/2015/10/10375-sheringham-tourist-information-centre-1.jpg?fit=2045%2C1151';
const coimbatoreImg = 'https://www.shutterstock.com/image-photo/worthing-uk-14-september-2020-260nw-1822672901.jpg';
const tiruchirappalliImg = 'https://mir-s3-cdn-cf.behance.net/projects/404/35f0b8202032721.Y3JvcCwxMTE5LDg3NiwyNzcsMA.jpg';
const salemImg = 'https://devx.work/blog/wp-content/uploads/2021/12/meeting-room-mumbai-featured-1650x1024.jpg';
const tirunelveliImg = 'https://content.jdmagicbox.com/comp/coimbatore/z6/0422px422.x422.190906112938.f6z6/catalogue/vignesh-towers-thudialur-coimbatore-estate-agents-lj2swhvpne.jpg?clr=';

const stores = [
  { id: 1, name: 'Chennai Branch', location: 'Chennai', img: chennaiImg, address: '123 Marina Beach Road, Chennai, TN 600001', operator: 'Ravi Kumar', contact: '+91 98765 43210' },
  { id: 2, name: 'Madurai Branch', location: 'Madurai', img: maduraiImg, address: '456 Meenakshi Temple St, Madurai, TN 625001', operator: 'Anjali Devi', contact: '+91 87654 32109' },
  { id: 3, name: 'Coimbatore Branch', location: 'Coimbatore', img: coimbatoreImg, address: '789 Race Course Rd, Coimbatore, TN 641018', operator: 'Suresh Reddy', contact: '+91 76543 21098' },
  { id: 4, name: 'Tiruchirappalli Branch', location: 'Tiruchirappalli', img: tiruchirappalliImg, address: '101 Rockfort Rd, Tiruchirappalli, TN 620001', operator: 'Meera Nair', contact: '+91 65432 10987' },
  { id: 5, name: 'Salem Branch', location: 'Salem', img: salemImg, address: '202 Cherry Road, Salem, TN 636001', operator: 'Rajesh Kumar', contact: '+91 54321 09876' },
  { id: 6, name: 'Tirunelveli Branch', location: 'Tirunelveli', img: tirunelveliImg, address: '303 Palayamkottai Main Rd, Tirunelveli, TN 627002', operator: 'Lakshmi Patel', contact: '+91 43210 98765' },
];

const StoreList = () => {
  return (
  
    <div className="store-list" >
      <Navbar/>
      <h1 className='Storeh1'>Store List in Tamil Nadu</h1>
      <div className="store-grid">
        {stores.map((store) => (
          <div key={store.id} className="store-item">
            <div className="store-image-container">
              <img src={store.img} alt={store.name} className="store-image" />
            </div>
            <div className="store-details">
              <h2>{store.name}</h2>
              <p>Location: {store.location}</p>
              <p>Address: {store.address}</p>
              <p>Operator: {store.operator}</p>
              <p>Contact: {store.contact}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default StoreList;