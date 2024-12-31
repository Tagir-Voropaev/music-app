import styles from './page.module.scss'
import Search from "../../layout/Search";
const Playlists = () => {
  return (
    <div className={styles.page}>
      <Search />
      <h1>Playlists</h1>
    </div>
  )
}

export default Playlists