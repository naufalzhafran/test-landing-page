"use client"
import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";

interface AboutImage {
  src: string;
  alt: string;
}

const aboutImages: AboutImage[] = [
  { src: "/about-us/about-us-1.webp", alt: "About us image 1" },
  { src: "/about-us/about-us-2.webp", alt: "About us image 2" },
  { src: "/about-us/about-us-3.webp", alt: "About us image 3" },
  { src: "/about-us/about-us-4.webp", alt: "About us image 4" },
  { src: "/about-us/about-us-5.webp", alt: "About us image 5" },
  { src: "/about-us/about-us-6.webp", alt: "About us image 6" },
  { src: "/about-us/about-us-7.webp", alt: "About us image 7" },
  { src: "/about-us/about-us-8.webp", alt: "About us image 8" },
  { src: "/about-us/about-us-9.webp", alt: "About us image 9" },
  { src: "/about-us/about-us-10.webp", alt: "About us image 10" },
];

interface DragState {
  isDragging: boolean;
  startX: number;
  currentX: number;
}

const SectionCarousel: React.FC = () => {
  const total = aboutImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    currentX: 0,
  });

  // Refs for cleanup and DOM manipulation
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);
  const isUserInteractingRef = useRef(false);

  // Cleanup function for timeouts
  const clearTransitionTimeout = useCallback(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  // Auto-play management functions
  const startAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) return;
    
    autoPlayIntervalRef.current = setInterval(() => {
      if (!isUserInteractingRef.current && !isTransitioningRef.current) {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= total ? 0 : nextIndex; // Loop back to first slide
        });
      }
    }, 3000); // Change slide every 3 seconds
  }, [total]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  }, []);

  const pauseAutoPlay = useCallback(() => {
    isUserInteractingRef.current = true;
    stopAutoPlay();
  }, [stopAutoPlay]);

  const resumeAutoPlay = useCallback(() => {
    isUserInteractingRef.current = false;
    // Resume auto-play after a short delay
    setTimeout(() => {
      if (!isUserInteractingRef.current) {
        startAutoPlay();
      }
    }, 2000); // Wait 2 seconds before resuming
  }, [startAutoPlay]);

  // Calculate transform value with drag offset
  const transform = useMemo(() => {
    const baseTransform = -currentIndex * 100;
    if (dragState.isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const dragPercent = ((dragState.currentX - dragState.startX) / containerWidth) * 100;
      return baseTransform + dragPercent;
    }
    return baseTransform;
  }, [currentIndex, dragState]);

  // Navigate to specific slide
  const goToSlide = useCallback((targetIndex: number) => {
    if (isTransitioningRef.current) return;
    
    // Pause auto-play when user manually navigates
    pauseAutoPlay();
    
    // Clamp target index to valid range
    const clampedIndex = Math.max(0, Math.min(total - 1, targetIndex));
    setCurrentIndex(clampedIndex);
    
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    
    clearTransitionTimeout();
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
      // Resume auto-play after manual navigation
      resumeAutoPlay();
    }, 500); // Match CSS transition duration
  }, [total, clearTransitionTimeout, pauseAutoPlay, resumeAutoPlay]);

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isTransitioningRef.current || currentIndex >= total - 1) return;
    goToSlide(currentIndex + 1);
  }, [currentIndex, total, goToSlide]);

  const goToPrev = useCallback(() => {
    if (isTransitioningRef.current || currentIndex <= 0) return;
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Handle transition end
  const handleTransitionEnd = useCallback(() => {
    if (!isTransitioning) return;
    
    clearTransitionTimeout();
    setIsTransitioning(false);
    isTransitioningRef.current = false;
  }, [isTransitioning, clearTransitionTimeout]);

  // Unified pointer event handlers
  const handlePointerStart = useCallback((clientX: number) => {
    if (isTransitioningRef.current) return;
    
    // Pause auto-play when user starts dragging
    pauseAutoPlay();
    
    setDragState({
      isDragging: true,
      startX: clientX,
      currentX: clientX,
    });
  }, [pauseAutoPlay]);

  const handlePointerMove = useCallback((clientX: number) => {
    if (!dragState.isDragging) return;
    
    setDragState(prev => ({
      ...prev,
      currentX: clientX,
    }));
  }, [dragState.isDragging]);

  const handlePointerEnd = useCallback(() => {
    if (!dragState.isDragging || !containerRef.current) return;
    
    const deltaX = dragState.currentX - dragState.startX;
    const containerWidth = containerRef.current.offsetWidth;
    const threshold = containerWidth * 0.15; // 15% of container width
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentIndex > 0) {
        goToPrev();
      } else if (deltaX < 0 && currentIndex < total - 1) {
        goToNext();
      }
    } else {
      // Resume auto-play if no navigation occurred
      resumeAutoPlay();
    }
    
    setDragState({
      isDragging: false,
      startX: 0,
      currentX: 0,
    });
  }, [dragState, currentIndex, total, goToNext, goToPrev, resumeAutoPlay]);

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handlePointerStart(e.touches[0].clientX);
  }, [handlePointerStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (dragState.isDragging) {
      e.preventDefault();
      handlePointerMove(e.touches[0].clientX);
    }
  }, [dragState.isDragging, handlePointerMove]);

  const handleTouchEnd = useCallback(() => {
    handlePointerEnd();
  }, [handlePointerEnd]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handlePointerStart(e.clientX);
  }, [handlePointerStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragState.isDragging) {
      e.preventDefault();
      handlePointerMove(e.clientX);
    }
  }, [dragState.isDragging, handlePointerMove]);

  const handleMouseUp = useCallback(() => {
    handlePointerEnd();
  }, [handlePointerEnd]);

  const handleMouseLeave = useCallback(() => {
    if (dragState.isDragging) {
      handlePointerEnd();
    }
  }, [dragState.isDragging, handlePointerEnd]);

  // Start auto-play on mount
  useEffect(() => {
    startAutoPlay();
    return () => {
      clearTransitionTimeout();
      stopAutoPlay();
    };
  }, [clearTransitionTimeout, startAutoPlay, stopAutoPlay]);

  // Add global mouse event listeners when dragging
  useEffect(() => {
    if (!dragState.isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      handlePointerEnd();
    };

    document.addEventListener('mousemove', handleGlobalMouseMove, { passive: false });
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [dragState.isDragging, handlePointerMove, handlePointerEnd]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md mx-auto rounded-2xl relative overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={() => {
        handleMouseLeave();
        resumeAutoPlay();
      }}
      style={{ 
        cursor: dragState.isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y pinch-zoom'
      }}
    >
      {/* Slides container */}
      <div
        ref={slidesRef}
        className={`flex ${
          dragState.isDragging
            ? '' 
            : 'transition-transform duration-500 ease-in-out'
        }`}
        style={{
          transform: `translateX(${transform}%)`,
          minHeight: 300,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {aboutImages.map((image, idx) => (
          <div
            key={`${idx}-${image.src}`}
            className="flex-shrink-0 w-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{ height: '300px' }}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow transition-colors ${
          currentIndex === 0 || isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Previous slide"
        type="button"
        disabled={currentIndex === 0 || isTransitioning}
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow transition-colors ${
          currentIndex === total - 1 || isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Next slide"
        type="button"
        disabled={currentIndex === total - 1 || isTransitioning}
      >
        &#8594;
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
        {aboutImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              idx === currentIndex 
                ? "bg-white scale-150 shadow-lg" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCarousel; 