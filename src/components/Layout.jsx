import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__background" aria-hidden="true" />
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
