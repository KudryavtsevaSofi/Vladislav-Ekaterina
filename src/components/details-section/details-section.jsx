import Heart from '../../assets/images/heart.svg';
import StickBig from '../../assets/images/stick-big.svg';

import styles from './details-section.module.scss';

const DetailsSection = () => {
  return (
    <div className={styles.component}>
      <p className={styles.component__title}>
        Детали
      </p>
      <p className={styles.component__text}>
        Обратите внимание, что формат мероприятия не предполагает детской площадки 
        и аниматоров.
      </p>
      <img src={Heart} className={styles.component__heartImg}></img>
      <p className={styles.component__text}>
        Пожалуйста, не дарите нам цветы, так как их красота недолговечна. Вместо них мы 
        будем рады бутылочке вашего любимого алкоголя, на которой будут написаны ваши 
        пожелания, день или особое событие, когда мы должны её открыть, или корм для 
        животных, который мы пожертвуем в приют.
      </p>
      <img src={Heart} className={styles.component__heartImg}></img>
      <p className={styles.component__text}>
        Потребности молодой семьи переменчивы, поэтому, чтобы вам не ломать голову над 
        подарками, мы будем рады вашему взносу в наш семейный бюджет.
      </p>
      <img src={StickBig} className={styles.component__stickImg}></img>
    </div>
  );
};

export default DetailsSection;