import React from 'react';
import ProductCard from '../components/ProductCard';

const TopRated = () => {
  let content;
  /* const {
    state: { products, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>Something went wrong..</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>There is no products. Product list is empty.</p>;
  }
  if (!loading && !error && products.length) {
    content = products.filter(product=>product.rating >=4).map((product) => (
      <ProductCard key={product.id} product={product}></ProductCard>
    ));
  } */

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;