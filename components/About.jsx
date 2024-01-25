function About() {
  return (
    <div >
      <div className="flex h-screen ">
        <div className=" hidden md:block  bg-[url('2ndfold-leftbanner.jpg')] w-full bg-no-repeat bg-cover"></div>
        <div className="bg-[url('/img/2ndfold-rightbanner.jpg')] w-full bg-cover bg-no-repeat flex flex-col items-center md:items-start">
          <p className="text-6xl text-white pt-14 pl-10">ABOUT US</p>
          <p className="bg-black bg-opacity-70 text-white w-3/4 mt-16 p-5  md:p-10 md:pb-[45px] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit sit numquam culpa quidem, nostrum maiores temporibus odio
            mollitia, ipsum expedita saepe consequuntur, doloribus quae
            provident deleniti. Nulla, dolorum ipsa. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repudiandae suscipit sit numquam culpa
            quidem, nostrum maiores temporibus odio mollitia, ipsum expedita
            saepe consequuntur, doloribus quae provident deleniti. Nulla,
            dolorum ipsa
            <div className="flex justify-end ">
            <p className=" bg-yellow-300 rounded-full text-2xl w-8 text-center text-black mt-0 p-0 ">&#8594;</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
