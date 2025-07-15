"use client"
import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";

interface AboutPoint {
  icon: string;
  title: string;
  description: string;
}

const aboutPoints: AboutPoint[] = [
  {
    icon: "💰",
    title: "Competitive Pricing",
    description: "Most competitive pricing without compromising on quality",
  },
  {
    icon: "🛡️",
    title: "100% Reliable",
    description: "Money-back guarantee if you're not satisfied with our products",
  },
  {
    icon: "⭐",
    title: "Premium Quality",
    description: "Rigorous quality control to guarantee performance and consistency",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    description: "Quick and reliable communication for all your inquiries",
  },
];

interface DragState {
  isDragging: boolean;
  startX: number;
  currentX: number;
}

const SectionCarousel: React.FC = () => {
  const total = aboutPoints.length;
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
  const isTransitioningRef = useRef(false);

  // Cleanup function for timeouts
  const clearTransitionTimeout = useCallback(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

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
    
    // Clamp target index to valid range
    const clampedIndex = Math.max(0, Math.min(total - 1, targetIndex));
    setCurrentIndex(clampedIndex);
    
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    
    clearTransitionTimeout();
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }, 500); // Match CSS transition duration
  }, [total, clearTransitionTimeout]);

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
    
    setDragState({
      isDragging: true,
      startX: clientX,
      currentX: clientX,
    });
  }, []);

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
    }
    
    setDragState({
      isDragging: false,
      startX: 0,
      currentX: 0,
    });
  }, [dragState, currentIndex, total, goToNext, goToPrev]);

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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTransitionTimeout();
    };
  }, [clearTransitionTimeout]);

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
      className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg relative overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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
          minHeight: 220,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {aboutPoints.map((point, idx) => (
          <div
            key={`${idx}-${point.title}`}
            className="flex-shrink-0 w-full flex flex-col items-center text-center p-8"
          >
            <div className="text-5xl mb-4" role="img" aria-label={point.title}>
              {point.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.description}</p>
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
      <div className="flex justify-center my-3 space-x-2">
        {aboutPoints.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              idx === currentIndex 
                ? "bg-gray-800 scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
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