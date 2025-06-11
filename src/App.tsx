import './App.css';
import { useRef } from 'react';

const App = () => {
  const bgRef = useRef<HTMLImageElement>(null);

  return (
    <div className='relative min-h-screen w-full'>
      {/* Background image with lower opacity and scroll animation */}
      <img 
        ref={bgRef}
        src="/background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 transition-transform duration-300"
        style={{ pointerEvents: 'none' }}
      />
      {/* Main content area with white background and shadow for separation */}
      <div className="relative flex-col z-10 flex justify-center items-center min-h-screen">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-12 m-7 flex flex-col items-center space-y-8 w-full max-w-2xl">
          <img
            src="/sigmaAyaan.jpg"
            alt="Ayaan"
            className="w-64 h-64 rounded object-cover shadow-lg border-4 border-white mb-4"
          />
          {/* Who is Ayaan section in its own square */}
          <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-8 flex flex-col items-start w-full">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Who is Ayaan?
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Ayaan is a passionate developer who loves building web applications and learning new technologies.
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-1 m-7 flex flex-col items-center space-y-8 w-full max-w-2xl">
          <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-8 flex flex-col items-center w-full">
            <img
              src="/cool.png"
              alt="Smiley face"
              className="w-24 h-24 rounded-full object-cover shadow border-2 border-blue-200 mb-6 mx-auto"
            />
            <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center">Why is he so cool?</h2>
            <ul className="list-disc list-inside text-xl text-gray-700 space-y-2 text-center">
              <li>He is the best person on Earth.</li>
              <li>He is a great friend.</li>
              <li>He is a great person.</li>
              <li>He has a great intellegence.</li>
              <li>He has a great haircut.</li>
            </ul>
          </div>
        </div>
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-12 m-7 flex flex-col items-center space-y-8 w-full max-w-2xl">
          <img
            src="/betterImage.jpeg"
            alt="Ayaan"
            className="w-270 h-64 rounded object-cover shadow-lg border-4 border-white mb-4"
          />
        </div>
      </div>
      
      <p className='text-lg text-gray-700'></p>
    </div>
  );
};

export default App


// Black, White, Blue, red