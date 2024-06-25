import styles from './Tabs.module.scss'

const Tabs = () => {
	return (
		<div className={styles.tab}>
			<ul className={`${styles['tab__box']} container`}>
				<li className={styles['tab__box-item']}>
					<a href='/' className={styles['tab__box-btn']}>
						web-development
					</a>
				</li>

				<li className={styles['tab__box-item']}>
					<a href='/' className={styles['tab__box-btn']}>
						UI/UX
					</a>
				</li>

				<li className={styles['tab__box-item']}>
					<a href='/' className={styles['tab__box-btn']}>
						life
					</a>
				</li>

				<li className={styles['tab__box-item']}>
					<a href='/' className={styles['tab__box-btn']}>
						frontend
					</a>
				</li>

				<li className={styles['tab__box-item']}>
					<a href='/' className={styles['tab__box-btn']}>
						backend
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Tabs
