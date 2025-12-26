import OutfitCarousel from './dresscode-carousel';
import Outfit1 from '../../assets/images/outfit-1.svg';
import Outfit2 from '../../assets/images/outfit-2.svg';
import Outfit3 from '../../assets/images/outfit-3.svg';
import Outfit4 from '../../assets/images/outfit-4.svg';
import Outfit5 from '../../assets/images/outfit-5.svg';

import styles from './dresscode-section.module.scss';

const DressCodeSection = () => {

  const slides = [
    {
      photo: Outfit1,
    },
    {
      photo: Outfit2,
    },
    {
      photo: Outfit3,
    },
    {
      photo: Outfit4,
    },
    {
      photo: Outfit5,
    }
  ];

  return (
    <div className={styles.component}>
      <div className={styles.component__topBlock}>
        <p className={styles.component__title}>
          Дресс-код
        </p>
        <p className={styles.component__text}>
          Пожалуйста, приходите в красивой одежде, которая соответствует торжественному настроению.
          <br /> <br />
          Мы будем рады, если вы поддержите цветовую палитру нашей свадьбы:
        </p>
        <div className={styles.component__colors}>
          <svg className={styles.component__colorCircle} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="17" fill="#01265D" stroke="black"/>
          </svg>
          <svg className={styles.component__colorCircle} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="17" fill="#657694" stroke="black"/>
          </svg>
          <svg className={styles.component__colorCircle} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="17" fill="#AFCFFF" stroke="black"/>
          </svg>
          <svg className={styles.component__colorCircle} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="17" fill="#DBEAFF" stroke="black"/>
          </svg>
          <svg className={styles.component__colorCircle} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="17" fill="#FEF7E9" stroke="black"/>
          </svg>
        </div>
      </div>
      <OutfitCarousel slides={slides}/>
    </div>
  );
};

export default DressCodeSection;