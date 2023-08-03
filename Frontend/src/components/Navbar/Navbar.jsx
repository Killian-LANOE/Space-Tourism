function Navbar() {
  const menuPages = [
    { text: "HOME", link: "/" },
    { text: "DESTINATION", link: "/Destination" },
    { text: "CREW", link: "/Crew" },
    { text: "TECHNOLOGY", link: "/Technology" },
  ];

  function handleMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("translate-x-full");
    menu.classList.toggle("hidden");
  }

  const isMobile = window.innerWidth < 426;

  return (
    <nav className="absolute h-20 w-full pb-6 text-white font-other justify-between z-10">
      <div className="grid h-20 w-11/12 m-auto grid-flow-col items-center justify-between">
        <img
          id="logo"
          src="Frontend/src/assets/shared/logo.svg"
          alt="logo of space tourism"
          className=""
        ></img>
        <button className="h-6 w-6 " onClick={handleMenu}>
          <img src="Frontend/src/assets/shared/icon-hamburger.svg"></img>
        </button>
      </div>

      <div
        id="menu"
        className="absolute translate-x-full hidden right-0 top-0 flex-col overflow-hidden w-2/3"
      >
        <aside className="backdrop-blur-3xl h-screen w-full">
          <button className="absolute right-6 top-8 " onClick={handleMenu}>
            <img src="Frontend/src/assets/shared/icon-close.svg"></img>
          </button>

          <div className="flex flex-col h-3/5 justify-center gap-8 ml-8 tracking-[2.7px]">
            {menuPages.map((page, index) => (
              <a
                key={index}
                className={`${
                  window.location.pathname === page.link ? "active" : ""
                }`}
                href={page.link}
              >
                {isMobile ? <strong className="mr-3">0{index}</strong> : ""}{" "}
                {page.text}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
