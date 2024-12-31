import styles from './page.module.scss'
import Search from "../../layout/Search";
const Albums = () => {
  return (
    <div className={styles.page}>
      <Search />
      <h1>Albums</h1>
    </div>
  )
}

export default Albums