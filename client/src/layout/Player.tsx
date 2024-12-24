'use client'
import styles from "./Player.module.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward, faPlay, faStepForward, faRepeat, faShuffle, faPause, faEllipsis, faHeart, faPlus, faCheck, faList, 
    faWindowMaximize, faVolumeUp, faUpRightAndDownLeftFromCenter, faDownload, faMicrophoneLines, 
    faShare} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Player() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const track__button = document.querySelectorAll(`.${styles.track__button}`);
            const button = document.querySelectorAll(`.${styles.button}`);
            const more_button = document.querySelectorAll(`.${styles.more_button}`);
            track__button.forEach((item) => {
                const rect = (item as HTMLElement).getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                (item as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
                (item as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
            });
            more_button.forEach((item) => {
                const rect = (item as HTMLElement).getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                (item as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
                (item as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
            });
            button.forEach((item) => {
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

    const [showList, setShowList] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [isList, setIsList] = useState(false);


    return (
        <div className={styles.player}>
            <div className={styles.player__line}>
            </div>
            <div className={styles.player__content}>
                <div className={styles.left__buttons}>
                    <button title="Включить предыдущий трек" className={`${styles.button}`}>
                        <FontAwesomeIcon className={styles.button__icon} icon={faStepBackward} />
                    </button>
                    <button title="Воспроизведение/пауза" className={`${styles.button}`} onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <FontAwesomeIcon className={styles.button__icon} icon={faPause} /> : <FontAwesomeIcon className={styles.button__icon} icon={faPlay} />}
                    </button>
                    <button title="Включить следующий трек" className={`${styles.button}`}>
                        <FontAwesomeIcon className={styles.button__icon} icon={faStepForward} />
                    </button>
                    <button title="Включить/выключить режим повтора" className={`${styles.button} ${isRepeat ? styles.button__active : ''}`} onClick={() => setIsRepeat(!isRepeat)}>
                        <FontAwesomeIcon className={styles.button__icon} icon={faRepeat} />
                    </button>
                    <button title="Включить/выключить в случайном порядке" className={`${styles.button} ${isShuffle ? styles.button__active : ''}`} onClick={() => setIsShuffle(!isShuffle)}>
                        <FontAwesomeIcon className={styles.button__icon} icon={faShuffle} />
                    </button>
                </div>

                <div className={styles.track}>
                    <div className={styles.track__image}>
                        <div className={styles.track__image__icon}></div>
/*************  ✨ Codeium Command 🌟  *************/
                    </div>
                    <div className={styles.track__text}>
                        <h3 className={styles.track__title}>Track Name</h3>
                        <h3 className={styles.track__artist}>Artist Name</h3>
                    </div>
                    <div className={styles.track__buttons}>
                        <button title="Добавить в плейлист" className={`${styles.button} ${isAdd ? styles.track__button__added : ''}`} onClick={() => setIsAdd(!isAdd)}>
                            {isAdd ? <FontAwesomeIcon className={styles.track__button__icon} icon={faCheck} /> : <FontAwesomeIcon className={styles.track__button__icon} icon={faPlus} />}
                        </button>
                        <button title="Мне нравится" className={`${styles.button} ${styles.track__button__like} ${isLike ? styles.track__button__liked : ''}`} onClick={() => setIsLike(!isLike)}>
                            <FontAwesomeIcon className={styles.track__button__icon} icon={faHeart} />
                        </button>
                        <div className={`${styles.more__block}`}>
                            <div className={`${styles.more__list} ${showList ? styles.more__list__show : styles.more__list__hide}`}>
                                <button className={`${styles.more_button}`}>
                                    <FontAwesomeIcon className={styles.more__button__icon} icon={faDownload} />
                                    <p>Скачать</p>
                                </button>
                                <button className={`${styles.more_button}`}>
                                    <FontAwesomeIcon className={styles.more__button__icon} icon={faPlus} />
                                    <p>Добавить в плейлист</p>
                                </button>
                                <button className={`${styles.more_button}`}>
                                    <FontAwesomeIcon className={styles.more__button__icon} icon={faMicrophoneLines} />
                                    <p>Перейти к исполнителю</p>
                                </button>
                                <button className={`${styles.more_button}`}>
                                    <FontAwesomeIcon className={styles.more__button__icon} icon={faShare} />
                                    <p>Поделиться</p>
                                </button>
                            </div>
                            <button onClick={() => setShowList(!showList)} className={`${styles.button} ${styles.track__button__more}`}>
                                <FontAwesomeIcon className={styles.track__button__icon} icon={faEllipsis} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.right__buttons}>
                    <button title="Очередь прослушивания" className={`${styles.button} ${styles.right__button__queue} ${isList ? styles.button__active : ''}`} onClick={() => setIsList(!isList)}>
                        <FontAwesomeIcon className={styles.right__button__icon} icon={faList} />
                    </button>
                    <button className={`${styles.button} ${styles.right__button__volume}`}>
                        <FontAwesomeIcon className={styles.right__button__icon} icon={faVolumeUp} />
                    </button>
                    <button title="Открыть поверх других окон" className={`${styles.button} ${styles.right__button__ontop}`}>
                        <FontAwesomeIcon className={styles.right__button__icon} icon={faWindowMaximize} />
                    </button>
                    <button title="Развернуть" className={`${styles.button} ${styles.right__button__ontop}`}>
                        <FontAwesomeIcon className={styles.right__button__icon} icon={faUpRightAndDownLeftFromCenter} />
                    </button>
                </div>
            </div>
        </div>
    );
}