import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY
			setScrollPosition(position)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`${
				scrollPosition > 100 && scrollPosition <= 400 ? styles.hide : ''
			} ${scrollPosition > 400 ? styles.show : ''}`}
		>
			<nav className={`${styles.nav} container`}>
				<div className={styles['nav__title']}>
					<h1>
						<span className={styles.att}>{'{'}</span>withglasses
						<span className={styles.att}>{'}'}</span>
					</h1>
				</div>

				<div className={styles['nav__menu']}>
					<ul className={styles['nav__menu-list']}>
						<li className={styles['nav__menu-item']}>
							<Link className={styles['nav__menu-link']} to={'/'}>
								.home()
							</Link>
						</li>

						<li className={styles['nav__menu-item']}>
							<Link className={styles['nav__menu-link']} to={'/'}>
								.category()
							</Link>
						</li>

						<li className={styles['nav__menu-item']}>
							<Link className={styles['nav__menu-link']} to={'/'}>
								.blogs()
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
