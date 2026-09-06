function Page({ title, children }) {
  return (
    <section className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__content">{children}</div>
    </section>
  )
}

export default Page
