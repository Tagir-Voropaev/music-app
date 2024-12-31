"use client"



import styles from "./Sidebar.module.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMusic, faPodcast, faRadio, faHeadphones, faCompactDisc, faMicrophoneLines, faList, faFolder, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const items = document.querySelectorAll(`.${styles.list__item}`);
            const menu__button = document.querySelectorAll(`.${styles.menu__button}`);
            menu__button.forEach((item) => {
                const rect = (item as HTMLElement).getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                (item as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
                (item as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
            });
            items.forEach((item) => {
                const rect = (item as HTMLElement).getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                (item as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
                (item as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    return (
        <div className={`${styles.menu} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.menu__button__block}>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className={styles.menu__button}>
                    <FontAwesomeIcon className={styles.menu__button__icon} icon={faBars} />

                </button>
            </div>
            <div className={styles.menu__list}>
                <div className={styles.menu__top}>
                    <ul className={styles.top}>
                        <Link href='/' className={`${styles.top__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faMusic} />
                            </div>
                            <p>Главное</p>
                        </Link>
                    </ul>
                    <ul className={styles.middle}>
                        <h2 className={styles.middle__title}>МОЯ МУЗЫКА</h2>
                        <Link href="/tracks" className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faHeadphones} />
                            </div>
                            <p>Музыка</p>
                        </Link>
                        <Link href="/albums" className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faCompactDisc} />
                            </div>
                            <p>Альбомы</p>
                        </Link>
                        <Link href='/artists' className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faMicrophoneLines} />
                            </div>
                            <p>Исполнители</p>
                        </Link>
                        <Link href='/playlists' className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faList} />
                            </div>
                            <p>Плейлисты</p>
                        </Link>
                        <Link href='/files' className={`${styles.middle__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faFolder} />
                            </div>
                            <p>Файлы</p>
                        </Link>
                    </ul>
                </div>
                <ul className={styles.bottom}>
                    <span className={styles.bottom__separator}>
                        <div className={styles.bottom__separator__line}></div>
                    </span>
                    <li className={`${styles.bottom__item} ${styles.list__item}`}>
                        <div className={styles.list__icon__block}>
                            <FontAwesomeIcon className={styles.list__icon} icon={faGear} />
                        </div>
                        <p>Настройки</p>
                    </li>
                    {isAuth ? (
                        <Link href='/profile' className={`${styles.bottom__item} ${styles.list__item}`}>
                            <div className={styles.list__icon__block}>
                                <FontAwesomeIcon className={styles.list__icon} icon={faUser} />
                            </div>
                            <p>Профиль</p>
                        </Link>
                    )
                        : (
                            <Link href='/auth' className={`${styles.bottom__item} ${styles.list__item}`}>
                                <div className={styles.list__icon__block}>
                                    <FontAwesomeIcon className={styles.list__icon} icon={faUser} />
                                </div>
                                <p>Войти</p>
                            </Link>
                        )}
                </ul>
            </div>
        </div>
    )
}