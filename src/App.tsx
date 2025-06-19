import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {

  return (
    <div className="relative min-h-screen">
      <img
        src="/src/assets/img/Subject.png"
        alt="Subject"
        className="absolute left-0 bottom-0 w-32 h-auto z-10 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:brightness-110 cursor-pointer"
      />

      <ProfileCard />
    </div>
  );
}

export default App;
