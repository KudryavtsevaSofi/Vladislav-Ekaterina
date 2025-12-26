import FlowersBlue from '../../assets/images/flowers-blue.svg';

import styles from './date-section.module.scss';

const DateSection = () => {
  return (
    <div className={styles.component}>
      <div className={styles.component__textBlock}>
        <p className={styles.component__title}>Дорогие гости!</p>
        <p className={styles.component__text}>Хотим, чтобы вы разделили с нами радость и были на торжестве в самый важный и трогательный день в нашей жизни!</p>
      </div>

      <div className={styles.component__calendar}>
        <p className={styles.component__calendarTitle}>Июнь</p>
      </div>
      <table className={styles.component__calendarTable}>
        <tbody>
          <tr className={`${styles.component__calendarTable} ${styles['component__calendarTable--top']}`}>
            <td>Пн</td>
            <td>Вт</td>
            <td>Ср</td>
            <td>Чт</td>
            <td>Пт</td>
            <td>Сб</td>
            <td>Вс</td>
          </tr>
          <tr className={`${styles.component__calendarTable} ${styles['component__calendarTable--bottom']}`}>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td className={`${styles.component__calendarTable} ${styles['component__calendarTable--cell']}`}>
              20
            </td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
      <img src={FlowersBlue} className={styles.component__flowersImg} alt='flowers'></img>
    </div>
  );
};

export default DateSection;