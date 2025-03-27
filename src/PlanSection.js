
import React from 'react';

function PlanSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-lg mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Plan that fit your Need!</h2>
        <h3 className="text-xl mb-4 text-gray-900">Subscription just for you.</h3>
        <p className="text-gray-800 mb-4">
          Subscribe to a Wi-flix account today and enjoy Traditional, International and 360° 
          entertainment right on all devices.
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-900">What’s included</h4>
        <ul className="text-left text-gray-800 mb-4 list-disc list-inside">
          <li>Flexible Package</li>
          <li>Unlimited number of devices</li>
          <li>360° Entertainment</li>
          <li>Traditional, International</li>
        </ul>
        <div className="text-4xl font-bold mb-4 text-gray-900">$2.99</div>
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 mb-2">
          Start Today
        </button>
        <div className="text-xs text-gray-600">
          Terms and Conditions Apply
        </div>
      </div>
    </section>
  );
}

export default PlanSection;
    