import React from 'react';
import './offers.css'
const NewOffers = () => {
  const offers = [
    { id: 1, title: '50% Off on All Electronics', description: 'Grab the latest gadgets at half the price!' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Available on select clothing items.' },
    { id: 3, title: 'Free Shipping on Orders Above $100', description: 'Enjoy free delivery on large purchases!' },
    { id: 4, title: '20% Off on Home Appliances', description: 'Upgrade your home with a discount on appliances.' },
    { id: 5, title: '30% Off on Furniture', description: 'Revamp your living space with discounted furniture.' },
    { id: 6, title: 'Exclusive Online Deal - 40% Off', description: 'Get 40% off when you shop online for select items.' },
    { id: 7, title: 'Weekend Flash Sale: Up to 70% Off', description: 'This weekend only! Save big on various products.' },
    { id: 8, title: 'Back to School Offer: 25% Off', description: 'Shop school essentials with a 25% discount.' },
    { id: 9, title: 'Holiday Special: Free Gift with Every Purchase', description: 'Celebrate the season with a free gift for every order!' },
    { id: 10, title: '15% Off on Beauty Products', description: 'Look your best with a discount on beauty essentials.' },
  ];


  return (
    <section className="new-offers">
      <h2>New Offers</h2>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewOffers;
