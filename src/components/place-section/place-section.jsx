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
        <img src={Banquet} className={styles.component__image}></img>
        <p className={styles.component__text}>Банкетный зал «Фьюжн»</p>
        <button 
          className={styles.component__mapBtn}
          onClick={() => window.open('https://yandex.ru/maps/?ll=50.166436,53.117672&z=17&pt=50.166436,53.117672', '_blank')}
        >
          Показать на карте
        </button>
      </div>
      <img src={FlowersBlue} className={styles.component__flowersImg}></img>
    </div>
  );
};

export default PlaceSection;