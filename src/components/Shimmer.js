import React from 'react';

const Shimmer = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>

      {Array(15).fill('').map((event, index) => (<div className='w-[200px] border border-slate-200 p-3 h-[270px] mx-2 my-4 bg-gray-100' key={index}></div> ))}
    
    </div>
  )
}

export default Shimmer;