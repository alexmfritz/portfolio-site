import './Header.scss';
import HeaderLogo from './HeaderLogo';
import NavLinks from './NavLinks';

export default function Header(props) {
  return (
    <header>
      <nav className="header-nav flex center between">
        <HeaderLogo />
        <NavLinks onClick={props.onClick}/>
      </nav>
    </header>
  )
}

