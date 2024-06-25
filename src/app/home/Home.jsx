import Account from '../../components/accountBox/Account'
import Tabs from '../../components/tabs/Tabs'
import styles from './Home.module.scss'

const Home = () => {
	const data = [
		{
			title: 'VSCode Havfli bulishi mumkinmi?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},
		{
			title: 'React nima uchun kerak deb uylaysiz?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},
		{
			title: 'VueJS vs ReactJS qaysi biri eng yaxshi?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},

		{
			title: 'React nima uchun kerak deb uylaysiz?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},
		{
			title: 'VueJS vs ReactJS qaysi biri eng yaxshi?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},

		{
			title: 'React nima uchun kerak deb uylaysiz?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},
		{
			title: 'VueJS vs ReactJS qaysi biri eng yaxshi?',
			desc: 'Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson extensionlar tekshirilmaydi shuning extensionlar tekshirilmaydi shuning vscode ni marketplaceda kiritilayatgan extensionlar tekshirilmaydi shuning uchun ...',
		},
	]

	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...'
		}
		return text
	}

	return (
		<>
			<section className={styles.hero}>
				<div className={styles['hero__wrapper']}>
					<div className={`${styles['hero__wrapper-inner']} container`}>
						<h1 className={styles['hero__wrapper-title']}>
							VSCode Havfli bulishi mumkinmi?
						</h1>
						<span className={styles['hero__wrapper-desc']}>
							Ayni vaqti vscode ni marketplaceda kiritilayatgan extensionlar
							tekshirilmaydi shuning uchun ular yordamida virus tarqatish oson
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
							blanditiis commodi fuga?Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nobis, delectus recusandae? Maxime porro impedit
							quibusdam! Neque nisi nulla tenetur eaque dolore! Voluptate?
						</span>
						<Account />
					</div>
				</div>
			</section>
			<section className={styles.blogs}>
				<Tabs />
				<div className={`${styles['blogs__wrapper']} container`}>
					{data.map((item, index) => (
						<div key={index} className={styles['blogs__wrapper-card']}>
							<div className={styles['blogs__wrapper-cover']}></div>
							<div className={styles['blogs__wrapper-text']}>
								<h1 className={styles['blogs__wrapper-title']}>
									{truncateText(item.title, 30)}
								</h1>
								<span className={styles['blogs__wrapper-desc']}>
									{truncateText(item.desc, 100)}
								</span>
							</div>
							<Account type={'blog'} />
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Home
