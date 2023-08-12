function Accueil() {
  const handleClick = () => (window.location = "/Destination");

  return (
    <div>
      <div className="flex flex-col justify-around text-center bg-home-mobile h-screen bg-no-repeat bg-cover overflow-hidden md:bg-home-tablet lg:bg-home-desktop lg:flex-row lg:items-center">
        <div className="h-full flex flex-col justify-around lg:items-end lg:justify-around lg:h-4/6 lg:flex-row">
          <div className="text-white w-[85%] mx-auto pt-16 md:pt-28 lg:w-1/3 lg:mx-0 lg:flex lg:flex-col lg:items-center lg:text-left lg:pt-0">
            <p className="text-primary font-other tracking-[2.7px] md:text-[20px] lg:text-[28px] lg:w-full lg:tracking-[4.72px] lg:mb-5">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="font-title text-[80px] mx-4 md:text-[150px] md:leading-tight lg:w-full">
              SPACE
            </h1>
            <p className="font-text text-primary text-[15px] leading-[25px] md:w-8/12 md:mx-auto md:text-base md:leading-7 lg:text-[18px] lg:mx-0 lg:leading-8 lg:w-full">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className="w-min mx-auto lg:mx-0">
            <button
              className="text-black text-xl bg-white rounded-full h-[150px] w-[150px] hover:outline hover:outline-[44px] hover:outline-white/10 hover: md:h-[242px] md:w-[242px] md:text-[32px] md:tracking-[2px] lg:tracking-[2px] lg:h-[274px] lg:w-[274px] lg:text-[32px]"
              onClick={handleClick}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
