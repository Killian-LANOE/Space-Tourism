function Accueil() {
  const handleClick = () => (window.location = "/Destination");

  return (
    <div>
      <div className="flex flex-col justify-around text-center bg-home-mobile h-screen bg-no-repeat bg-cover overflow-hidden ">
        <div className="text-white w-[85%] mx-auto pt-16">
          <p className="text-primary font-other tracking-[2.7px] ">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-title text-[80px] mx-4">SPACE</h1>
          <p className="font-text text-primary text-[15px] leading-[25px]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div>
          <button
            className="text-black text-xl bg-white rounded-full h-[150px] w-[150px] hover:outline hover:outline-[44px] hover:outline-zinc-700 "
            onClick={handleClick}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
