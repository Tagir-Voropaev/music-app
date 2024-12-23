"use client"

import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { useState } from "react";

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className={`${styles.menu} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.menu__button__block}>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className={styles.menu__button}>
                    <span className={styles.menu__button_image}></span>
                    <span className={styles.menu__button_image}></span>
                    <span className={styles.menu__button_image}></span>
                </button>
            </div>
            <div className={styles.menu__list}>
                <div className={styles.menu__top}>
                    <ul className={styles.top}>
                        <li className={`${styles.top__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/musical-note.png" alt="" width={16} height={16} />
                            </div>
                            <p>Главная</p>
                        </li>
                        <li className={`${styles.top__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/wave-sound.png" alt="" width={16} height={16} />
                            </div>
                            <p>Радио</p>
                        </li>
                        <li className={`${styles.top__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/mic.png" alt="" width={16} height={16} />
                            </div>
                            <p>Подкасты и книги</p>
                        </li>
                    </ul>
                    <ul className={styles.middle}>
                        <h2 className={styles.middle__title}>МОЯ МУЗЫКА</h2>
                        <li className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/music.png" alt="" width={16} height={16} />
                            </div>
                            <p>Музыка</p>
                        </li>
                        <li className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/album.png" alt="" width={16} height={16} />
                            </div>
                            <p>Альбомы</p>
                        </li>
                        <li className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/head.png" alt="" width={16} height={16} />
                            </div>
                            <p>Исполнители</p>
                        </li>
                        <li className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/playlist.png" alt="" width={16} height={16} />
                            </div>
                            <p>Плейлисты</p>
                        </li>
                        <li className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <Image className={styles.list__icon} src="/images/sidebar/folder.png" alt="" width={16} height={16} />
                            </div>
                            <p>Файлы</p>
                        </li>
                    </ul>
                </div>
                <ul className={styles.bottom}>
                    <span className={styles.bottom__separator}>
                        <div className={styles.bottom__separator__line}></div>
                    </span>
                    <li className={`${styles.bottom__item} ${styles.list__item}`}>
                        <div className={styles.list__icon__block}>
                            <Image className={styles.list__icon} src="/images/sidebar/setting.png" alt="" width={16} height={16} />
                        </div>
                        <p>Настройки</p>
                    </li>
                    <li className={`${styles.bottom__item} ${styles.list__item}`}>
                        <div className={styles.list__icon__block}>
                            <Image className={styles.list__icon} src="/images/sidebar/user.png" alt="" width={16} height={16} />
                        </div>
                        <p>Профиль</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}