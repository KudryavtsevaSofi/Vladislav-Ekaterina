import Banquet from '../../assets/images/banquet.svg';
import FlowersBlue from '../../assets/images/flowers-blue.svg';

import styles from './place-section.module.scss';

const PlaceSection = () => {
  return (
    <div className={styles.component}>
      <div className={styles.component__topBlock}>
        <p className={styles.component__title}>
          Место проведения <br/> банкета
        </p>
        <img src={Banquet} className={styles.component__image} alt='banquet'></img>
        <p className={styles.component__text}>Банкетный зал «Фьюжн»</p>
        <button 
          className={styles.component__mapBtn}
          onClick={() => window.open('https://yandex.ru/maps/org/2_pertsa/96151419258/?ll=50.166436,53.117672&z=17&pt=50.166436,53.117672', '_blank')}
        >
          Показать на карте
        </button>
      </div>
      <div className={styles.component__flowersBlock}>
        <img src={FlowersBlue} className={styles.component__flowersImg} alt='flowers'></img>
      </div>
    </div>
  );
};

export default PlaceSection;