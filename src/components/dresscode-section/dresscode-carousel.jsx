import React, { useState, useRef, useCallback } from 'react';

import styles from './dresscode-carousel.module.scss';

const OutfitCarousel = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  const nextSlide = useCallback(() => {
    if (isAnimating || slides.length <= 1) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, slides.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        nextSlide();
      } 
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const renderSlideContent = (slide) => {
    if (!slide) return null;
    
    if (typeof slide === 'object' && slide.photo !== undefined) {
      return (
        <>
          {slide.photo && (
            <img 
              src={slide.photo} 
              className={styles.slidePhoto} 
              alt="slide"
            />
          )}
        </>
      );
    }
    
    return (
      <div className={styles.slideContent}>
        {slide}
      </div>
    );
  };

  const getSlideData = (index) => {
    return slides[index % slides.length];
  };

  // Вычисляем индексы для текущего, следующего и третьего слайда
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
  const thirdSlideIndex = (currentSlideIndex + 2) % slides.length;

  return (
    <div 
      className={styles.carousel}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselViewport}>
          <div className={styles.slidesContainer}>
            {/* Текущий слайд */}
            <div 
              className={`${styles.slide} ${styles.currentSlide} ${isAnimating ? styles.animating : ''}`}
            >
              {renderSlideContent(getSlideData(currentSlideIndex))}
            </div>

            {/* Следующий слайд (выглядывает справа) */}
            {slides.length > 1 && (
              <div 
                className={`${styles.slide} ${styles.nextSlide} ${isAnimating ? styles.animating : ''}`}
                onClick={!isAnimating ? nextSlide : undefined}
              >
                {renderSlideContent(getSlideData(nextSlideIndex))}
              </div>
            )}

            {/* Третий слайд (выглядывает еще дальше справа) */}
            {slides.length > 2 && (
              <div 
                className={`${styles.slide} ${styles.thirdSlide} ${isAnimating ? styles.animating : ''}`}
                onClick={!isAnimating ? () => {
                  // Пропускаем один слайд, переходим сразу к третьему
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentSlideIndex(thirdSlideIndex);
                    setIsAnimating(false);
                  }, 500);
                } : undefined}
              >
                {renderSlideContent(getSlideData(thirdSlideIndex))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitCarousel;