import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 font-bold text-4xl cursor-pointer'>NETFLIX</h1>
      <div>
        <button className='pr-4'>Sing In</button>
        <button className='bg-red-600  px-6 py-2 rounded'>Sing Up</button>
      </div>
    </div>
  );
};

export default Navbar;