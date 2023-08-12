function Navbar() {
  const menuPages = [
    { text: "HOME", link: "/" },
    { text: "DESTINATION", link: "Destination" },
    { text: "CREW", link: "Crew" },
    { text: "TECHNOLOGY", link: "Technology" },
  ];

  function handleMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("translate-x-full");
    menu.classList.toggle("hidden");
  }

  const isTablet = window.innerWidth > 425 && window.innerWidth < 1024;

  return (
    <nav className="absolute h-20 w-full pb-6 text-white font-other justify-between z-10 lg:h-24 lg:mt-[40px]">
      <div className="grid h-20 w-11/12 m-auto grid-flow-col items-center justify-between">
        <img
          id="logo"
          src="./assets/shared/logo.svg"
          alt="logo of space tourism"
          className="mt-6 ml-2"
        ></img>
        <button className="h-6 w-6 md:hidden " onClick={handleMenu}>
          <img
            src="./assets/shared/icon-hamburger.svg"
            alt="button to open menu"
          ></img>
        </button>
      </div>

      <div
        id="menu"
        className="absolute translate-x-full hidden right-0 top-0 flex-col overflow-hidden w-2/3 md:translate-x-0 md:flex md:h-24 md:flex-row md:w-2/3 lg:w-4/6"
      >
        <aside className="md:absolute backdrop-blur-2xl h-screen w-full md:bg-white md:bg-opacity-5 lg:right-0 lg:w-5/6 lg:h-full">
          <button
            className="absolute right-6 top-8 md:hidden "
            onClick={handleMenu}
          >
            <img
              src="./assets/shared/icon-close.svg"
              alt="button to close menu"
            ></img>
          </button>

          <div className="flex flex-col h-3/5 justify-center gap-8 ml-8 tracking-[2.7px] md:flex-row md:items-center md:h-24 md:w-2/3 md:mx-auto lg:ml-38 lg:gap-12">
            {menuPages.map((page, index) => (
              <a
                key={index}
                className="relative group md:relative"
                href={page.link}
              >
                <span
                  className={`md:absolute md:h-[3px] md:w-full md:bg-white md:-bottom-9 md:left-0 ${
                    window.location.pathname === page.link
                      ? "md:opacity-1"
                      : "md:opacity-0"
                  }`}
                ></span>
                <strong className={isTablet ? "hidden" : "mr-2"}>
                  0{index}
                </strong>
                {page.text}
                <span
                  className={`md:absolute md:inset-x-0 md:-bottom-9 md:h-[3px] md:bg-white/25 md:opacity-0 md:group-hover:opacity-100`}
                ></span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
