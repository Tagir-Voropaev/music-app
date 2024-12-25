"use client"

import styles from "./page.module.scss";

export default function Home() {

    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Главное</h1>
            <div className={styles.page__content}>
                    <h2>Подборки</h2>
                <div className={styles.content__selections}>
                    <div className={styles.content__selection}>
                        <h2 className={styles.content__selection__title}></h2>
                        <h4 className={styles.content__selection__subtitle}></h4>
                    </div>
                </div>
            </div>
        </div>
       
    );
}
