function Accueil() {
  const handleClick = () => (window.location = "/Destination");

  return (
    <div id="accueil">
      <div id="accueil--content">
        <div id="accueil--content--description">
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div id="accueil--content--button">
          <button onClick={handleClick}>EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
