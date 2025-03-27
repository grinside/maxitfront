
import React from 'react';

function NewOnWiflixSection() {
  const movies = [
    { title: "Akwuna", image: "https://dummyimage.com/300x450/404040/fff.png&text=Akwuna" },
    { title: "The Chase", image: "https://dummyimage.com/300x450/404040/fff.png&text=The+Chase" },
    { title: "Life in Tech", image: "https://dummyimage.com/300x450/404040/fff.png&text=Life+in+Tech" },
    { title: "Zula Nights", image: "https://dummyimage.com/300x450/404040/fff.png&text=Zula+Nights" },
    { title: "Last Stand", image: "https://dummyimage.com/300x450/404040/fff.png&text=Last+Stand" }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">New on Wi-flix</h2>
        <p className="text-gray-700 mb-4">
          Discover the Latest Cinematic Adventures Only on Wi-flix
        </p>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {movies.map(movie => (
            <img 
              key={movie.title} 
              src={movie.image} 
              alt={movie.title} 
              className="w-40 md:w-52 rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewOnWiflixSection;
    