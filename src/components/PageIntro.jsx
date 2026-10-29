export default function PageIntro({ eyebrow, title, lede, children }) {
  return (
    <header className="page-intro">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
      {children}
    </header>
  )
}
