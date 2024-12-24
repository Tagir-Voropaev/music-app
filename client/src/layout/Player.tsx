'use client'
import styles from "./Player.module.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward, faPlay, faStepForward, faRepeat, faShuffle, faPause, faEllipsis, faHeart, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";    

export default function Player() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const left__button = document.querySelectorAll(`.${styles.left__button}`);
            left__button.forEach((item) => {
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

    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    return (
        <div className={styles.player}>
            <div className={styles.player__line}>
            </div>
            <div className={styles.player__content}>
                <div className={styles.left__buttons}>
                    <button className={`${styles.button__prev} ${styles.left__button}`}>
                        <FontAwesomeIcon className={styles.left__button__icon} icon={faStepBackward} />
                    </button>
                    <button className={`${styles.button__play} ${styles.left__button}`} onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <FontAwesomeIcon className={styles.left__button__icon} icon={faPause} /> : <FontAwesomeIcon className={styles.left__button__icon} icon={faPlay} />}
                    </button>
                    <button className={`${styles.button__next} ${styles.left__button}`}>
                        <FontAwesomeIcon className={styles.left__button__icon} icon={faStepForward} />
                    </button>
                    <button className={`${styles.button__repeat} ${styles.left__button} ${isRepeat ? styles.left__button__active : ''}`} onClick={() => setIsRepeat(!isRepeat)}>
                        <FontAwesomeIcon className={styles.left__button__icon} icon={faRepeat} />
                    </button>
                    <button className={`${styles.button__shuffle} ${styles.left__button} ${isShuffle ? styles.left__button__active : ''}`} onClick={() => setIsShuffle(!isShuffle)}>
                        <FontAwesomeIcon className={styles.left__button__icon} icon={faShuffle} />
                    </button>
                </div>
                <div className={styles.track}>
                    <div className={styles.track__image}>
                    </div>
                    <div className={styles.track__text}>
                        <h3 className={styles.track__title}>Track Name</h3>
                        <h3 className={styles.track__artist}>Artist Name</h3>
                    </div>
                    <div className={styles.track__buttons}>
                        <button className={`${styles.track__button} ${styles.track__button__add} ${isAdd ? styles.track__button__added : ''}`} onClick={() => setIsAdd(!isAdd)}>
                            {isAdd ? <FontAwesomeIcon className={styles.track__button__icon} icon={faCheck} /> : <FontAwesomeIcon className={styles.track__button__icon} icon={faPlus} />}
                        </button>
                        <button className={`${styles.track__button} ${styles.track__button__like} ${isLike ? styles.track__button__liked : ''}`} onClick={() => setIsLike(!isLike)}>
                            <FontAwesomeIcon className={styles.track__button__icon} icon={faHeart} />
                        </button>
                        <button className={`${styles.track__button} ${styles.track__button__more}`}>
                            <FontAwesomeIcon className={styles.track__button__icon} icon={faEllipsis} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}