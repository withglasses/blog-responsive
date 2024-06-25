import styles from './Account.module.scss'

const Account = ({ type }) => {
	return (
		<div className={`${styles.account} ${type === 'blog' ? styles.blog : ''}`}>
			<div className={styles['account__cover']}>
				<img
					className={styles['account__cover-img']}
					src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='user cover'
				/>
			</div>
			<div className={styles['account__text']}>
				<div className={styles['account__text-title']}>
					Mirzadavlat Tursunaliyev
				</div>
				<div className={styles['account__text-subtitle']}>21 July 1min</div>
			</div>
		</div>
	)
}

export default Account
