import styles from './Search.module.scss'
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
export default function Search() {
    return (
        <div className={styles.search}>
            <FontAwesomeIcon className={styles.search__icon} icon={faSearch} />
            <input className={styles.search__input} type="text" placeholder="Поиск" />
        </div>
    )
}