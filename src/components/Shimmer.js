import React from 'react';

const Shimmer = () => {
  return (
    <div className='body'>

      {Array(10).fill('').map((event, index) => (<div className='card-shimmer' key={index}></div> ))}
    
    </div>
  )
}

export default Shimmer;