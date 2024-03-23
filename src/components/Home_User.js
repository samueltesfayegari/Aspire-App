import React from 'react';

const HomeUser = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="px-4 py-6">
        <h1 className="text-4xl font-bold mb-6">Explore</h1>
        <div className="flex items-center bg-gray-200 rounded-full p-2 mb-6">
          <i className="fas fa-search text-gray-500 ml-4"></i>
          <input className="bg-transparent ml-3 placeholder-gray-500 outline-none" placeholder="Collection, item or user" type="text" />
        </div>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {/* First row of images */}
          <div className="flex flex-col items-center">
            <img alt="Abstract art with blue and purple colors" className="rounded-lg" src="https://placehold.co/150x150" width="150" height="150" />
            <p className="mt-2 font-semibold text-center">GusGus</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Digital portrait of a person in profile with a cap" className="rounded-lg" src="https://placehold.co/150x150" width="150" height="150" />
            <p className="mt-2 font-semibold text-center">Bored 🐼</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Artistic representation of a water droplet with an orange center" className="rounded-lg" src="https://placehold.co/150x150" width="150" height="150" />
            <p className="mt-2 font-semibold text-center">FOX CLUB</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Surreal image of a hand reaching out to a glowing orb" className="rounded-lg" src="https://placehold.co/150x150" width="150" height="150" />
            <p className="mt-2 font-semibold text-center">TIme</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Exclusive drops 🌟</h2>
          <a className="text-blue-500 font-semibold" href="#">See all</a>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {/* Exclusive drops */}
          <div className="flex flex-col items-center">
            <img alt="Soft ice cream cone" className="rounded-full" src="https://placehold.co/100x100" width="100" height="100" />
            <p className="mt-2 font-semibold text-center">onChain</p>
            <p className="text-center text-gray-600">639 763 US$</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Colorful digital skull art" className="rounded-full" src="https://placehold.co/100x100" width="100" height="100" />
            <p className="mt-2 font-semibold text-center">20Styx</p>
            <p className="text-center text-gray-600">374 937 US$</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Abstract face with brain exposed" className="rounded-full" src="https://placehold.co/100x100" width="100" height="100" />
            <p className="mt-2 font-semibold text-center">Inroom</p>
            <p className="text-center text-gray-600">82 726 US$</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Newest ⚡</h2>
          <a className="text-blue-500 font-semibold" href="#">See all</a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {/* Newest */}
          <div className="flex flex-col items-center">
            <img alt="Minimalist sculpture on a pedestal" className="rounded-lg" src="https://placehold.co/100x100" width="100" height="100" />
            <p className="mt-2 font-semibold text-center">A #8275</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Digital bust of a classical statue with blue lighting" className="rounded-lg" src="https://placehold.co/100x100" width="100" height="100" />
            <p className="mt-2 font-semibold text-center">David #0x00</p>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Cityscape at dusk with warm lighting" className="rounded-lg" src="https://placehold.co/100x100" width="100" height="100" />
            <p className="mt-2 font-semibold text-center">Silver blue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
