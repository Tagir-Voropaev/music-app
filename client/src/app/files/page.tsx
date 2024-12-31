import styles from './page.module.scss'
import Search from "../../layout/Search";
const Files = () => {
  return (
    <div className={styles.page}>
      <Search />
      <h1>Files</h1>
    </div>
  )
}

export default Files