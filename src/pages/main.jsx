import { useEffect, useState } from 'react';
import styles from './main.module.scss';
import StickSmall from '../assets/images/stick-small.svg';
import HeroSection from '../components/hero-section/hero-section';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const handleMediaChange = (e) => setIsMobile(e.matches);
    
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <div className={styles.page}>
      {isMobile ? (
        <div className={styles.mobile}>
          <HeroSection />
        </div>
      ) : (
        <div className={styles.desktop}>
          <div className={styles.desktop__content}>
            <p className={styles.desktop__text}>Пожалуйста, откройте сайт через <br/>мобильное устройство</p>
            <img src={StickSmall} className={styles.desktop__stick} alt='Веточка' />
          </div>
        </div>
      )}
    </div>
  )
}

export default MainPage;