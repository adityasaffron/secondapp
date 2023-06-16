import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
    'http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0773%2F2628%2F7145%2Fproducts%2FMain_0a40b01b-5021-48c1-80d1-aa8ab4876d3d_500x.jpg%3Fv%3D1686631771&w=1920&q=75',
    'http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0773%2F2628%2F7145%2Fproducts%2FMain_c8ff0b5d-c712-429a-be00-b29bd55cbc9d_500x.jpg%3Fv%3D1686631771&w=1920&q=75',
    'http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0773%2F2628%2F7145%2Fproducts%2FMain_589fc064-24a2-4236-9eaf-13b2bd35d21d_500x.jpg%3Fv%3D1686631771&w=1920&q=75',
  ];

const SliderSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Image Slider</h2>
      <Slider {...sliderSettings}>
        {sliderData.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;