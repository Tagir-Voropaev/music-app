import styles from './page.module.scss'

const Profile = () => {
    return (
      <div className={styles.page}>
        <h1>Profile</h1>
        <button className={styles.auth__block__exit}>Выйти</button>
      </div>
    )
  }
  
  export default Profile