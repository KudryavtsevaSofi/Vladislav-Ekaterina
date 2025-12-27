import { useEffect, useState } from 'react';
import styles from './main.module.scss';
import StickSmall from '../assets/images/stick-small.svg';
import HeroSection from '../components/hero-section/hero-section';
import DateSection from '../components/date-section/date-section';
import ScheduleSection from '../components/schedule-section/schedule-section';
import PlaceSection from '../components/place-section/place-section';
import DressCodeSection from '../components/dresscode-section/dresscode-section';
import DetailsSection from '../components/details-section/details-section';
import FooterSection from '../components/footer-section/footer-section';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
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
          <DateSection />
          <ScheduleSection />
          <PlaceSection />
          <DressCodeSection />
          <DetailsSection />
          <FooterSection />
        </div>
      ) : (
        <div className={styles.desktop}>
          <div className={styles.desktop__content}>
            <p className={styles.desktop__text}>Пожалуйста, откройте сайт через <br/>мобильное устройство</p>
            <img src={StickSmall} className={styles.desktop__stick} alt='stick' />
          </div>
        </div>
      )}
    </div>
  )
}

export default MainPage;