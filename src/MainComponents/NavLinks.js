export default function NavLinks(props) {
  return (
    <section className="header-nav-box">
      <ul className="header-nav-items flex end" onClick={props.onClick}>
        <li className="nav-drop-one" id="home">Home</li>
        <li className="nav-drop-two" id="about">About</li>
        <li className="nav-drop-three" id="pricing">Pricing</li>
        <li className="nav-drop-four" id="contact">Contact</li>
        <li className="nav-drop-five" id="portfolio">Portfolio</li>
      </ul>
    </section>
  )
}