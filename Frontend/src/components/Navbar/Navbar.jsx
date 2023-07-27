function Navbar() {
  const menuPages = [
    { text: "HOME", link: "/" },
    { text: "DESTINATION", link: "/Destination" },
    { text: "CREW", link: "/Crew" },
    { text: "TECHNOLOGY", link: "/Technology" },
  ];

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
            {menuPages.map((page, index) => (
              <a
                key={index}
                className={`menu--open--content--title ${
                  window.location.pathname === page.link ? "active" : ""
                }`}
                href={page.link}
              >
                <strong>0{index}</strong> {page.text}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
