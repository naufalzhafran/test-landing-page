import React, { useState, useEffect } from 'react';
// Removed: import Image from 'next/image'; // This import is specific to Next.js and causes the "Could not resolve" error outside a Next.js environment.

// Define your image data
const images = [
  {
    src: "https://placehold.co/800x600/FF5733/FFFFFF?text=Image+1",
    alt: "Vibrant abstract art piece"
  },
  {
    src: "https://placehold.co/800x600/33FF57/FFFFFF?text=Image+2",
    alt: "Serene mountain landscape at sunset"
  },
  {
    src: "https://placehold.co/800x600/3357FF/FFFFFF?text=Image+3",
    alt: "Modern city skyline at night"
  },
  {
    src: "https://placehold.co/800x600/FF33CC/FFFFFF?text=Image+4",
    alt: "Delicious gourmet meal presentation"
  },
  {
    src: "https://placehold.co/800x600/33CCFF/FFFFFF?text=Image+5",
    alt: "Close-up of a blooming flower"
  }
];

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Main container for the section */}
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden md:flex md:flex-row flex-col">

        {/* Left Section: Text Content */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover Our Latest Innovations
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore a world of possibilities with our cutting-edge solutions designed to elevate your experience. From intuitive interfaces to powerful performance, we're committed to bringing you the best.
          </p>
          <p className="text-md text-gray-500 mb-8">
            Our team of experts works tirelessly to push the boundaries of what's possible, ensuring that every product is crafted with precision and passion. Join us on this journey of discovery.
          </p>
          <button className="self-start px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Right Section: Image Carousel */}
        <div className="md:w-1/2 relative bg-gray-100 flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-lg aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            {/* Image display using standard <img> tag instead of next/image */}
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              // Tailwind classes for responsive behavior and object-fit
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              // Add intrinsic width and height for better rendering, though actual size is controlled by CSS
              width={800}
              height={600}
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-70'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
