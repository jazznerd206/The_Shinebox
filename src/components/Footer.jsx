function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {year} The Shinebox. All rights reserved.</p>
    </footer>
  )
}

export default Footer
