import StickSmall from '../../assets/images/stick-small.svg';
import FlowersBlue from '../../assets/images/flowers-blue.svg';

import styles from './footer-section.module.scss';

const FooterSection = () => {
  return (
    <div className={styles.component}>
      <p className={styles.component__title}>
        Самое важное
      </p>
      <p className={styles.component__text}>
        Пожалуйста, подтвердите своё присутствие до 29 марта 2026 года, заполнив анкету ниже.
      </p>
      <button 
        className={styles.component__formBtn}
        onClick={() => window.open('https://forms.yandex.ru/u/694e2d6390fa7ba58440d546', '_blank')}
      >
        Анкета гостя
      </button>
      <img src={StickSmall} className={styles.component__stickImg} alt='stick'></img>
      <p className={styles.component__title}>
        Контакты
      </p>
      <p className={styles.component__text}>
        По всем вопросам и уточнениям можете обращаться к нам:

      </p>
      <a href='tel:+79024137880' className={styles.component__contact}>
        Екатерина +7 902 413 78 80
      </a>
      <a href='tel:+79608433895' className={styles.component__contact}>
        Владислав +7 960 843 38 95
      </a>
      <div className={styles.component__flowersBlock}>
        <img src={FlowersBlue} className={styles.component__flowersImg} alt='flowers'></img>
      </div>
    </div>
  );
};

export default FooterSection;