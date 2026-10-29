import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth.js'
import AppBar from '../components/AppBar.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function MainLayout() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-top">
        <Header />
        {isAuthenticated ? null : <AppBar />}
      </div>
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
