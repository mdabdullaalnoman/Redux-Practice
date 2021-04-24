import React from 'react';
import productsData from './FakeData';
import Product from './Product';

const Shop = () => {

      return (
            <div>
                  this is shoop
                  {
                        productsData.map(pd => <Product pd={pd} key={pd.id}></Product>)
                  }
            </div>
      );
};

export default Shop;