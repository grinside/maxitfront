
import React from 'react';

function PopularChannelsSection() {
  const channels = [
    { name: "Fast and Fun Box" },
    { name: "Film Action Box" },
    { name: "Film Family Box" },
    { name: "Film Africa Box" },
    { name: "GameToon" }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Popular Channels</h2>
        <p className="text-gray-700 mb-4">
          Explore our exciting channels on Wi-flix.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {channels.map(channel => (
            <div 
              key={channel.name} 
              className="bg-white rounded shadow p-4 text-center flex flex-col items-center"
            >
              <div className="text-lg font-semibold mb-2">{channel.name}</div>
              <button className="mt-auto text-orange-500 border border-orange-500 rounded px-3 py-1 text-sm hover:bg-orange-500 hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularChannelsSection;
    