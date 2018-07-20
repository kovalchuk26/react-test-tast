import React from 'react';
import styles from '../styles/Sidebar.css';
import ClockIcon from '../assets/clock-icon.svg';

const Sidebar = () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <div className={styles.sidebar}>
            <div className={styles.filters}>
                <div className={styles.filterActive}>Все</div>
                <div className={styles.filter}>С заказами</div>
                <div className={styles.filter}>Избранные</div>
            </div>


            <div className={styles.postersList}>
                <div className={styles.content}>

                    <div className={styles.info}>
                        <div className={styles.infoTitleBlock}>
                            <ClockIcon/>
                            <div className={styles.infoTitle}>Ваше объявление добавлено</div>
                        </div>
                        <div className={styles.infoText}>
                            Мы отправили его ситтерам, скоро кто-нибудь откликнется.
                        </div>
                        <div className={styles.infoLink}>Посмотреть объявление</div>
                    </div>

                    {arr.map((item, index) => {
                        return index === 3
                            ? <div key={index} className={styles.posterDisabled}></div>
                            : <div key={index} className={styles.poster}></div>
                    })}
                </div>

                {/*fix padding-right with scroll in ff*/}
                <div className={styles.contentPadding}></div>

            </div>

        </div>
    )
};

export default Sidebar;