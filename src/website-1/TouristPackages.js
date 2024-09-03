import React from 'react';
import './TouristPackages.css';
import Navbar from './Navbar';
import Footer from './footer';

const TouristPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Beach Paradise and Waterfall",
      description: "Enjoy the sun and sand at our tropical beach resorts.",
      price: "Starting at Rs.1,999",
      imageUrl: "https://th.bing.com/th/id/R.992feaea79026a2ba4e4d45043359b97?rik=DmZ28qVa0izbFA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd6%2fKanyakumari_Sunrise.jpg&ehk=YaS3pLmW0aLMTZt2F6VMMxIsSc6%2bKgLO9Dkom0vaPUU%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Mountain Adventure",
      description: "Explore the mountains with guided hikes and stunning views.",
      price: "Starting at Rs.2,299",
      imageUrl: "https://th.bing.com/th/id/OIP.VAdEg9Fp36_TyIPkukW3KAHaEL?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
        id: 3,
        name: "Art and Architecture",
        description: "Explore and learn about our local art and culture.",
        price: "Starting at Rs.1,199",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/013/872/166/large_2x/tanjore-big-temple-or-brihadeshwara-temple-was-built-by-king-raja-raja-cholan-in-thanjavur-tamil-nadu-it-is-the-very-oldest-and-tallest-temple-in-india-this-temple-listed-in-unescos-heritage-site-free-photo.jpg"
    },
    {
        id: 4,
        name: "Wildlife Watching",
        description: "Discover the wildlife of our reserve forests.",
        price: "Starting at Rs.2,199",
        imageUrl: "https://th.bing.com/th/id/OIP.0GLuhh8tqK5GvKVFuGUTTgHaC9?w=310&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
        id: 5,
        name: "Family Getaway",
        description: "Indulge in a relaxing and comfortable getaway for your family.",
        price: "Starting at Rs.2,799",
        imageUrl: "https://static3.clubmahindra.com/storage/app/media/All%20Compressed%20banners/untitled-design-11.jpg?ar=11:16&mode=crop&crop=smart",
    },
    {
        id: 6,
        name: "Couples' Escape",
        description: "Cherish in an unforgettable couples' getaway.",
        price: "Starting at Rs.3,299",
        imageUrl: "https://th.bing.com/th/id/OIP.o7eoNg8kh1uXEvc5tR6DzgHaEo?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 7,
      name: "Couples' Escape",
      description: "Cherish in an unforgettable couples' getaway.",
      price: "Starting at Rs.3,299",
      imageUrl: "https://i.ytimg.com/vi/rMhqo8cPOQE/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "Couples' Escape",
    description: "Cherish in an unforgettable couples' getaway.",
    price: "Starting at Rs.3,299",
    imageUrl: "https://static2.tripoto.com/media/transfer/img/OgData/1520665647_pamban_bridge_rameshwaram_fotor.jpg",
}
  ];

  return (
    <section id="tourist-packages">
      <Navbar/>
      <h2 className='packageh2'>Our Tour Packages</h2>
      <div className="packages-container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.imageUrl} alt={pkg.name} className="package-image" />
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p className="package-price">{pkg.price}</p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
};

export default TouristPackages;
