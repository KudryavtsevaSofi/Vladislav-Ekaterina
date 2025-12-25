import Photo from '../../assets/images/photo.svg';
import Flowers from '../../assets/images/flowers.svg';

import styles from './hero-section.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.component}>
      <div className={styles.component__text}>
        <div className={`${styles.component__title} ${styles['component__title--top']}`}>
          <p>Владислав</p>
        </div>
        <div className={`${styles.component__title} ${styles['component__title--bottom']}`}>
          <p>Екатерина</p>
        </div>
      </div>
      <div className={styles.component__photo}>
        <img  src={Photo}></img>
      </div>
      <div className={styles.component__date}>
        <p>20.06.2026 <br/>г.Самара</p>
      </div>
      <div className={styles.component__image}>
        <img  src={Flowers}></img>
      </div>
    </div>
  );
};

export default HeroSection;