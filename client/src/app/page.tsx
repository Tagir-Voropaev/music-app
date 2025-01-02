"use client"

import styles from "./page.module.scss";
import Search from "../layout/Search";
import Image from "next/image";
import img1 from "../images/tracks/party.jpeg";
import img2 from "../images/tracks/aarnee.jpg";
import img3 from "../images/tracks/eminem.jpg";
import img4 from "../images/tracks/shady.jpeg";
import img5 from "../images/tracks/tape.jpeg";
import img6 from "../images/tracks/basts.jpeg";
import img7 from "../images/tracks/iowa.jpeg";
import img8 from "../images/tracks/kizaru.jpg";
import img9 from "../images/tracks/monetochka.jpeg";
import img10 from "../images/tracks/yakor.jpeg";

import year from "../images/selections/year.jpeg"
import month from "../images/selections/month.jpeg"
import winter from "../images/selections/winter.jpeg"
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
                            <div className={styles.content__selection__preview}>
                                <Image className={styles.content__selection__img} src={year} alt="" />
                            </div>
                            <h2 className={styles.content__selection__title}>2024</h2>
                            <h4 className={styles.content__selection__subtitle}>Лучшие треки года</h4>
                        </div>
                        <div className={styles.content__selection}>
                            <div className={styles.content__selection__preview}>
                                <Image className={styles.content__selection__img} src={month} alt="" />
                            </div>
                            <h2 className={styles.content__selection__title}>Премьера</h2>
                            <h4 className={styles.content__selection__subtitle}>Новинки этого месяца</h4>
                        </div>
                        <div className={styles.content__selection}>
                            <div className={styles.content__selection__preview}>
                                <Image className={styles.content__selection__img} src={winter} alt="" />
                            </div>
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
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img1} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Пати</p>
                                    <p className={styles.chart__elem__artist}>Катя Самбука</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:52</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>2</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img2} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Supersonic</p>
                                    <p className={styles.chart__elem__artist}>Big Baby Tape, Aarne</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:44</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>3</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img3} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Mockingbird</p>
                                    <p className={styles.chart__elem__artist}>Eminem</p>
                                </div>
                                <p className={styles.chart__elem__time}>4:10</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>4</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img4} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Cold Brew</p>
                                    <p className={styles.chart__elem__artist}>Shady Lady</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:17</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>5</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img5} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>4x4</p>
                                    <p className={styles.chart__elem__artist}>Big Baby Tape</p>
                                </div>
                                <p className={styles.chart__elem__time}>3:13</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>6</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img6} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>На заре</p>
                                    <p className={styles.chart__elem__artist}>Баста</p>
                                </div>
                                <p className={styles.chart__elem__time}>5:06</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>7</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img7} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Маршрутка</p>
                                    <p className={styles.chart__elem__artist}>IOWA</p>
                                </div>
                                <p className={styles.chart__elem__time}>3:11</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>8</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img8} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Зеркало</p>
                                    <p className={styles.chart__elem__artist}>kizaru</p>
                                </div>
                                <p className={styles.chart__elem__time}>2:32</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>9</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img9} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>Каждый раз</p>
                                    <p className={styles.chart__elem__artist}>Монеточка</p>
                                </div>
                                <p className={styles.chart__elem__time}>3:28</p>
                            </li>
                            <li className={styles.chart__elem}>
                                <h4 className={styles.chart__elem__number}>10</h4>
                                <div className={styles.chart__elem__preview}>
                                    <Image className={styles.chart__elem__img} src={img10} alt="" />
                                </div>
                                <div className={styles.chart__elem__text}>
                                    <p className={styles.chart__elem__name}>ДА, Я РУССКИЙ</p>
                                    <p className={styles.chart__elem__artist}>НАВЕРНОЕ ПОЭТ, ЯКОРХ, EVEN CUTE, ...</p>
                                </div>
                                <p className={styles.chart__elem__time}>1:54</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
