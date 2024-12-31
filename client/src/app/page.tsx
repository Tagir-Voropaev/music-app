"use client"

import styles from "./page.module.scss";
import Search from "../layout/Search";

export default function Home() {

    return (
        <div className={styles.page}>
            <Search />
            <h1 className={styles.page__title}>Главное</h1>
            <div className={styles.page__content}>
                <section className={styles.section__selections}>
                    <h2 className={styles.section__title}>Подборки</h2>
                    <div className={styles.content__selections}>
                        <div className={styles.content__selection}>
                            <div className={styles.content__selection__img}></div>
                            <h2 className={styles.content__selection__title}>2024</h2>
                            <h4 className={styles.content__selection__subtitle}>Лучшие треки года</h4>
                        </div>
                        <div className={styles.content__selection}>
                            <div className={styles.content__selection__img}></div>
                            <h2 className={styles.content__selection__title}>Премьера</h2>
                            <h4 className={styles.content__selection__subtitle}>Новинки этого месяца</h4>
                        </div>
                        <div className={styles.content__selection}>
                            <div className={styles.content__selection__img}></div>
                            <h2 className={styles.content__selection__title}>Зимние новинки</h2>
                            <h4 className={styles.content__selection__subtitle}>Треки для новогоднего настроения</h4>
                        </div>

                    </div>
                </section>
                <section className={styles.section__chart}>
                    <div className={styles.chart__header}>
                        <div className={styles.chart__header__text}>
                            <h2 className={styles.chart__header__title}>Чарт</h2>
                            <p className={styles.chart__header__subtitle}>Треки, популярные на Яндекс Музыке прямо сейчас</p>
                        </div>
                        <button className={styles.chart__header__button}>Смотреть всё</button>
                    </div>
                    <div className={styles.chart__content}>
                        <ul className={styles.chart__list}>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>1</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>2</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>3</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>4</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>5</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>6</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>7</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>8</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>9</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>10</h4>
                                <div className={styles.chart__elem__img}></div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>

    );
}
