import React from 'react';

import flooring from '../../../../assets/flooring1.jpg';
import handrails from '../../../../assets/handrails1.jpg';
import door from '../../../../assets/door1.jpg';
import deck from '../../../../assets/deck1.jpg';
import ProductCard from '../../../../common/ProductCard';
import './Products.scss';

function Products() {
  const products = [
    {
      id: 1,
      name: "Wooden Flooring",
      description: "Wooden floors are one of the most popular surfaces due to versatility of function and design.",
      icon: flooring
    },
    {
      id: 2,
      name: "Wooden Handrails",
      description: "All weather wooden handrails which enhance the overall beauty of your staircases.",
      icon: handrails
    },
    {
      id: 3,
      name: "Wooden Door",
      description: "Traditional and sturdy built wooden front and multi-utility doors.",
      icon: door
    },
    {
      id: 4,
      name: "Wooden Deck",
      description: "Robust wooden decks that let you enjoy your own time with superb reliability.",
      icon: deck
    }
  ]
  return (
    <div className='Products'>
      <div className='Top'>Your Products</div>

      <div className='Body'>

        <div className='CardsContainer'>
          {products.map((product, index) => (
            <ProductCard data={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;