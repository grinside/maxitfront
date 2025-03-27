
import React from 'react';

function AmazingCategoriesSection() {
  const categories = [
    { name: "African Reality", image: "https://source.unsplash.com/600x400/?african" },
    { name: "Best of International", image: "https://source.unsplash.com/600x400/?international" },
    { name: "Binge-worthy", image: "https://source.unsplash.com/600x400/?popcorn" },
    { name: "Action", image: "https://source.unsplash.com/600x400/?explosion" },
    { name: "Drama", image: "https://source.unsplash.com/600x400/?drama" },
    { name: "Adventure", image: "https://source.unsplash.com/600x400/?adventure" },
    { name: "Afrocentric", image: "https://source.unsplash.com/600x400/?african%20culture" },
    { name: "Love and Romance", image: "https://source.unsplash.com/600x400/?romantic" }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Amazing Categories</h2>
        <p className="text-gray-700 mb-4">
          Get all your exciting movies, series, and more on Wi-flix.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {categories.map(cat => (
            <div key={cat.name} className="text-center">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full rounded object-cover" 
              />
              <div className="mt-2 text-sm font-semibold">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmazingCategoriesSection;
    