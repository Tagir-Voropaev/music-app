import styles from './page.module.scss'
import Link from 'next/link'


const Registration = () => {

  return (
    <div className={styles.page}>
      <div className={styles.reg__block}>
        <div className={styles.reg__block__field}>
          <label htmlFor="login" className={styles.reg__block__label}>Логин</label>
          <input type="login" name="login" id="login" className={styles.reg__block__input} />
        </div>
        <div className={styles.reg__block__field}>
          <label htmlFor="email" className={styles.reg__block__label}>Email</label>
          <input type="email" name="email" id="email" className={styles.reg__block__input} />
        </div>
        <div className={styles.reg__block__field}>
          <label htmlFor="password" className={styles.reg__block__label}>Пароль</label>
          <input type="password" name="password" id="password" className={styles.reg__block__input} autoComplete="off" />
        </div>
        <button className={styles.reg__block__button}>Создать аккаунт</button>
        <div className={styles.reg__block__help}>
          <p>Уже есть аккаут?</p>
          <Link href="/auth" className={styles.reg__help__link}>Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration