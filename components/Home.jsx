function Home() {
  return (
    <>
      <div className="h-screen w-full bg-cover bg-no-repeat bg-[url('/img/banner.jpg')] flex justify-center items-start flex-col">
        <div className="pl-[18%] ">
        <p className="text-6xl text-white font-normal leading-tight">
          YOUR MOST
          <br /> TRUSTED <br /> LOGISTCS
          <br /> PARTNER
        </p>
        <button type="button" className=" text-black mt-5 focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 ">GET A QUOTE</button>
        </div>
      </div>
    </>
  );
}

export default Home;
