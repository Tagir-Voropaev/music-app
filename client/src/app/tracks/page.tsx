import styles from './page.module.scss'
import Search from "../../layout/Search";
const Tracks = () => {
  return (
    <div className={styles.page}>
<Search />
      <h1>Моя музыка</h1>
    </div>
  )
}

export default Tracks