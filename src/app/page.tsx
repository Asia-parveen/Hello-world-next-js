

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-rose-400 text-center h-auto align-middle shadow-stone-950 rounded p-6 ">
        <h1 className="text-4xl mt-6 mb-5  font-bold text-blue-950  rounded drop-shadow-md hover:drop-shadow-xl">
          Hello World
        </h1>
        <h2 className="text-2xl sm:text-3xl mt-1 font-bold text-stone-950">
          I am Asia Parveen
        </h2>
        <p className="text-base sm:text-lg mt-3 font-bold text-lime-800">
          Welcome to my Next.js world
        </p>
        <p className="text-base sm:text-lg mt-3 font-bold text-lime-800">
          I am a student in GIAIC learning<br></br>
          <span className="text-purple-950 mt-4">
            Web&Mobile App Development,Typescript,AI,and the Metaverse
          </span>
        </p>
        <p className="text-base sm:text-lg mt-2 font-bold text-pink-800">
          Excited to grow and build awesome projects!
        </p>

     
      </div>
    </div>
  );
};
export default Home;
