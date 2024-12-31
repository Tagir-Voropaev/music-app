import styles from './page.module.scss'
import Link from 'next/link'
const Auth = () => {
  return (
    <div className={styles.page}>
      <div className={styles.auth__block}>
        <div className={styles.auth__block__field}>
          <label htmlFor="email" className={styles.auth__block__label}>Email</label>
          <input type="email" name="email" id="email" className={styles.auth__block__input} />
        </div>
        <div className={styles.auth__block__field}>
          <label htmlFor="password" className={styles.auth__block__label}>Пароль</label>
          <input type="password" name="password" id="password" className={styles.auth__block__input} autoComplete="off" />
        </div>
          <p className={styles.auth__help__link}>Забыли пароль?</p>
        <button className={styles.auth__block__button}>Войти</button>
        <div className={styles.auth__block__help}>
          <Link href="/registration" className={styles.auth__help__link}>Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  )
}

export default Auth