import Zags from '../../assets/images/zags.svg';
import StickBig from '../../assets/images/stick-big.svg';
import Heart from '../../assets/images/heart.svg';

import styles from './schedule-section.module.scss';

const ScheduleSection = () => {
  return (
    <div className={styles.component}>
      <div className={styles.component__tobBlock}>
        <p className={styles.component__title}>
          Дворец бракосочетания
        </p>
        <img src={Zags} className={styles.component__image} alt='zags'></img>
        <p className={styles.component__text}>
          Адрес: г. Самара, ул. Молодогвардейская, 238
        </p>
        <button 
          className={styles.component__mapBtn}
          onClick={() => window.open('https://yandex.ru/maps/org/dvorets_brakosochetaniya/1017085378/?ll=50.122259%2C53.207942&pt=50.122243%2C53.207995&z=18', '_blank')}
        >
          Показать на карте
        </button>
        <img src={StickBig} className={styles.component__stickImg} alt='stick'></img>
      </div>
      <div className={styles.component__bottomBlock}>
        <p className={styles.component__title}>Расписание дня</p>

        <p className={styles.component__smallText}>Сбор гостей возле ЗАГСа</p>
        <p className={styles.component__largeText}>15:00</p>
        <img src={Heart} className={styles.component__heartImg} alt='stick'></img>

        <p className={styles.component__smallText}>Церемония бракосочетания</p>
        <p className={styles.component__largeText}>15:30</p>
        <img src={Heart} className={styles.component__heartImg} alt='heart'></img>

        <p className={styles.component__smallText}>Начало банкета</p>
        <p className={styles.component__largeText}>17:00</p>
        <img src={Heart} className={styles.component__heartImg} alt='heart'></img>

        <p className={styles.component__smallText}>Окончание вечера</p>
        <p className={styles.component__largeText}>23:00</p>

        <button 
          className={styles.component__chatBtn}
          onClick={() => window.open('https://t.me/+7CoJuQumeApjZjUy', '_blank')}
        >
          Присоединиться в чат гостей
        </button>
      </div>
    </div>
  );
};

export default ScheduleSection;