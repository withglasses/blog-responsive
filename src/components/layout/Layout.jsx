import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
	return (
		<>
			{/* Header start */}
			<Header />
			{/* Header end */}
			{/* Main code start */}
			<main>
				<Outlet />
			</main>
			{/* Main code end */}
			{/* Footer start */}
			<Footer />
			{/* Footer end */}
		</>
	)
}

export default Layout
