
import React, { useState, useEffect } from 'react';

function HeroSection() {
  const slides = [
    {
      title: "Excitement Anywhere Anytime",
      subtitle: "Access the best movies, series, cartoons and other amazing categories anytime and anywhere all on Wi-flix",
      image: "https://source.unsplash.com/1600x900/?cinema",
      buttonText: null
    },
    {
      title: "All your favourite Series in One place",
      subtitle: "Explore new Worlds and indulge in your favourite movies, series, tv series with Wi-flix!",
      image: "https://source.unsplash.com/1600x900/?popcorn",
      buttonText: "Watch Now"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, image, buttonText } = slides[currentSlide];

  return (
    <section className="relative">
      <div 
        className="bg-cover bg-center h-64 md:h-96 lg:h-[500px]" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-gray-200 max-w-2xl">
            {subtitle}
          </p>
          {buttonText && (
            <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
    