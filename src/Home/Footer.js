import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer flex between center">
      <section className="footer-nav-box">
        <ul className="footer-nav-items flex">
          <li className="puff-in-center-one"><a href="https://www.linkedin.com/in/alexmfritz/"><i class="fab fa-linkedin fa-2x"></i></a></li>
          <li className="puff-in-center-two"><a href="https://github.com/alexmfritz"></a><i class="fab fa-github-square fa-2x"></i></li>
          <li className="puff-in-center-three"><a href="mailto:alexfritzdev@gmail.com"><i class="fas fa-envelope-square fa-2x"></i></a></li>
        </ul>
      </section>
      <section className="footer-design-box end">
        <h3 className="flex end">Alex M Fritz Design 2022</h3>
      </section>
    </footer>
  )
}

