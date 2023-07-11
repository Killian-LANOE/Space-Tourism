function navbar() {
  function handleMenu() {
    const menu = document.querySelector("aside");
    menu.classList.toggle("menu--visible");
  }

  return (
    <nav>
      <div>
        <img
          id="logo"
          src="Frontend/src/assets/shared/logo.svg"
          alt="logo of space tourism"
        ></img>
      </div>
      <div id="menu">
        <button onClick={handleMenu}>
          <img src="Frontend/src/assets/shared/icon-hamburger.svg"></img>
        </button>
        <aside className="menu--open">
          <button onClick={handleMenu} id="menu--open--close--button">
            <img src="Frontend/src/assets/shared/icon-close.svg"></img>
          </button>
          <div id="menu--open--content">
            <a className="menu--open--content--title" href="/">
              <strong>00</strong> HOME
            </a>
            <a className="menu--open--content--title" href="/Destination">
              <strong>02</strong> DESTINATION
            </a>
            <a className="menu--open--content--title" href="/Crew">
              <strong>03</strong> CREW
            </a>
            <a className="menu--open--content--title" href="Technology">
              <strong>04</strong> TECHNOLOGY
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default navbar;
