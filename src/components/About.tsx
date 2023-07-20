const About = () => {
  // Contenido que deseas mostrar al hacer scroll
  return (
      <>
       <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap ">
       <div className="w-full sm:w-8/12 mx-auto px-3"> {/* Cambiamos w-10 por w-full en pantallas pequeñas */}
          <h1 className='font-semibold text-[32px] text-white mb-3'>Hello, my name is Luis Alberto, I'm <span className="text-[#C778DD]">software developer</span> and this is my portfolio. </h1>
          <p className='text-[#ABB2BF] my-6'>In my free time, I like to watch animes/web series, listen to music (and very early stage of learning guitar), read and explore new stuff in tech and try out new technologies to build fun side projects, and spend time with friends and family.</p>
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me!!
          </button>
        </div>
        <div className="mx-auto">
          <div className=""><img src="https://i.imgur.com/36z1wgy.png" alt="" /></div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className='w-4 h-4 bg-[#C778DD]'></div>
            <div className="">Currently working on <span className='text-white'>Portfolio</span></div>
          </div>
        </div>
       </div>
       <div className="px-5 py-10">
        <img className="mx-auto w-auto" src="https://i.imgur.com/QikIxco.png" alt="" />
       </div>
       
      </>
    
  );
};

export default About;
