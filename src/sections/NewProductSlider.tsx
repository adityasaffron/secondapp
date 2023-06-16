import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productData = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0773%2F2628%2F7145%2Fproducts%2FMain_589fc064-24a2-4236-9eaf-13b2bd35d21d_500x.jpg%3Fv%3D1686631771&w=1920&q=75',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0773%2F2628%2F7145%2Fproducts%2FMain_0a40b01b-5021-48c1-80d1-aa8ab4876d3d_500x.jpg%3Fv%3D1686631771&w=1920&q=75',
  },
  // Add more product data as needed
];

const NewProductSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">New Product Arrivals</h2>
      <Slider {...sliderSettings}>
        {productData.map((product) => (
          <div key={product.id} className="p-4">
            <img src={product.image} alt={product.name} className="mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewProductSlider;
