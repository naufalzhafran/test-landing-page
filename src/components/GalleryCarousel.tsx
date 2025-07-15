"use client"
import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

// Gallery images - you can replace these with actual images
const galleryImages: GalleryImage[] = [
  {
    id: "factory-1",
    src: "/hero-background.png", // placeholder - replace with actual factory images
    alt: "Our modern production facility",
    title: "Production Facility"
  },
  {
    id: "quality-control",
    src: "/hero-background.png", // placeholder
    alt: "Quality control process",
    title: "Quality Control"
  },
  {
    id: "packaging",
    src: "/hero-background.png", // placeholder
    alt: "Packaging and shipping process",
    title: "Packaging Process"
  },
  {
    id: "products",
    src: "/hero-background.png", // placeholder
    alt: "Our premium charcoal products",
    title: "Premium Products"
  },
  {
    id: "team",
    src: "/hero-background.png", // placeholder
    alt: "Our experienced team",
    title: "Expert Team"
  }
];

interface DragState {
  isDragging: boolean;
  startX: number;
  currentX: number;
}

const GalleryCarousel: React.FC = () => {
  const total = galleryImages.length;
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

  // Auto-scroll functionality
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  // Cleanup function for timeouts
  const clearTransitionTimeout = useCallback(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  const clearAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearTimeout(autoScrollRef.current);
      autoScrollRef.current = null;
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
    
    // Handle infinite scroll
    let clampedIndex = targetIndex;
    if (targetIndex >= total) {
      clampedIndex = 0;
    } else if (targetIndex < 0) {
      clampedIndex = total - 1;
    }
    
    setCurrentIndex(clampedIndex);
    
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    
    clearTransitionTimeout();
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }, 500);
  }, [total, clearTransitionTimeout]);

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-scroll setup
  useEffect(() => {
    if (!isAutoScrollPaused && !dragState.isDragging && !isTransitioning) {
      clearAutoScroll();
      autoScrollRef.current = setTimeout(() => {
        goToNext();
      }, 4000); // Change slide every 4 seconds
    }
    
    return clearAutoScroll;
  }, [currentIndex, isAutoScrollPaused, dragState.isDragging, isTransitioning, goToNext, clearAutoScroll]);

  // Handle mouse enter/leave for auto-scroll pause
  const handleMouseEnter = useCallback(() => {
    setIsAutoScrollPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoScrollPaused(false);
  }, []);

  // Unified pointer event handlers
  const handlePointerStart = useCallback((clientX: number) => {
    if (isTransitioningRef.current) return;
    
    setDragState({
      isDragging: true,
      startX: clientX,
      currentX: clientX,
    });
    setIsAutoScrollPaused(true);
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
    const threshold = containerWidth * 0.15;
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    
    setDragState({
      isDragging: false,
      startX: 0,
      currentX: 0,
    });
    setIsAutoScrollPaused(false);
  }, [dragState, goToNext, goToPrev]);

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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTransitionTimeout();
      clearAutoScroll();
    };
  }, [clearTransitionTimeout, clearAutoScroll]);

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
      className="w-full bg-white rounded-2xl shadow-lg relative overflow-hidden select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
          minHeight: 400,
        }}
      >
        {galleryImages.map((image, idx) => (
          <div
            key={`${idx}-${image.id}`}
            className="flex-shrink-0 w-full relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover"
              draggable={false}
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 text-xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
        type="button"
        disabled={isTransitioning}
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 text-xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next image"
        type="button"
        disabled={isTransitioning}
      >
        &#8594;
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              idx === currentIndex 
                ? "bg-white scale-125 shadow-lg" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${idx + 1}`}
            type="button"
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {total}
      </div>
    </div>
  );
};

export default GalleryCarousel; 