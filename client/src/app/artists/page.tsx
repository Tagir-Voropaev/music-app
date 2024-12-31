import styles from './page.module.scss'
import Search from "../../layout/Search";
const Artists = () => {
  return (
    <div className={styles.page}>
      <Search />
      <h1>Исполнители</h1>
    </div>
  )
}

export default Artists