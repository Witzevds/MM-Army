import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list--item">
          <a href="/">Home Page</a>
        </li>
        <li className="header__list--item">
          <a href="">Collaborations</a>
        </li>
        <li className="header__list--item">
          <a href="">Work with us</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
