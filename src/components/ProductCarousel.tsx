"use client"
import React, { useState, useCallback, useEffect, useRef } from "react";

interface Product {
  id: string;
  emoji: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) { // md breakpoint
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const scrollLeft = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  }, [maxIndex]);

  const scrollRight = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  }, [maxIndex]);

  const canScrollLeft = products.length > itemsPerView && (currentIndex > 0 || maxIndex > 0);
  const canScrollRight = products.length > itemsPerView && (currentIndex < maxIndex || maxIndex > 0);

  // Calculate the transform offset for sliding
  const getTransformOffset = () => {
    const cardWidth = 320; // w-80 = 320px
    const gap = 24; // gap-6 = 24px
    const itemWidthWithGap = cardWidth + gap;
    return -(currentIndex * itemWidthWithGap);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    
    touchEndX.current = e.touches[0].clientX;
    
    // Prevent vertical scrolling when swiping horizontally
    const deltaX = Math.abs(touchEndX.current - touchStartX.current);
    const deltaY = Math.abs(e.touches[0].clientY - (e.touches[0] as any).startY || 0);
    
    if (deltaX > deltaY) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && canScrollRight) {
        // Swiped left, go to next
        scrollRight();
      } else if (deltaX < 0 && canScrollLeft) {
        // Swiped right, go to previous
        scrollLeft();
      }
    }
    
    isDragging.current = false;
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="relative">
      {/* Left scroll button */}
      <button
        onClick={scrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 ${
          !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
        }`}
        disabled={!canScrollLeft}
        aria-label="Previous product"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right scroll button */}
      <button
        onClick={scrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 ${
          !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
        }`}
        disabled={!canScrollRight}
        aria-label="Next product"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Products container */}
      <div className="px-12 overflow-hidden">
        <div className="flex justify-center">
          <div 
            className={`relative ${
              itemsPerView === 1 ? 'w-80' : 
              itemsPerView === 2 ? 'w-[688px]' : // (320 + 24) * 2 
              'w-[1016px]' // (320 + 24) * 3 - 24
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding container */}
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out touch-pan-y"
              style={{
                transform: `translateX(${getTransformOffset()}px)`,
                width: `${products.length * (320 + 24) - 24}px` // Total width of all products
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card card-hover flex-shrink-0 w-80"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <div className="text-6xl">{product.emoji}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500">Starting from</span>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product indicators - only show if there are more products than can be displayed */}
      {products.length > itemsPerView && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel; 