import React from 'react';

const Product = ({ pd }) => {
      const { name, id } = pd;
      return (
            <div style={{ textAlign: 'center', background: 'black', color: 'white', padding: '30px', border: '1px solid white', margin: '30px' }}>
                  <h1>{name}</h1>
                  <h3>{id}</h3>
                  <button>add to card</button>
            </div>
      );
};

export default Product;