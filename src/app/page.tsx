

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-1/2 bg-rose-400 text-center h-1/2 align-middle  shadow-red-950 rounded ">
        <h1 className="text-4xl mt-6 mb-5  font-bold text-blue-950  rounded drop-shadow-md hover:drop-shadow-xl">
          Hello World
        </h1>
        <h2 className="text-3xl mt-1  font-bold te text-stone-950">
          I am Asia Parveen
        </h2>
        <p className="text-lg mt-3  font-bold te text-lime-800">
          Welcome to my Next.js world
        </p>
        <p className="text-lg mt-3  font-bold te text-lime-800">
          I am a student in GIAIC learning<br></br>
          <span className="text-purple-950 mt-4">
            Web&Mobile App Development,Typescript,AI,and the Metaverse
          </span>
        </p>
        <p className="text-lg mt-2  font-bold te text-pink-800">
          Excited to grow and build awesome projects!
        </p>

     
      </div>
    </div>
  );
};
export default Home;
