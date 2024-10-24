import React from 'react'

const VideoTitle = ({title, overview}) => {
  //console.log("title are:", title)
  return (
    <div className='absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
    <div className='pt-[15%] wrapper w-[1200px] mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>{title}</h1>
      <p className='text-lg py-4 w-1/3'>{overview}</p>
      <div className='mt-4'>
        <button className='text-black px-10 py-3 bg-gray-300 mr-4 font-bold rounded-md hover:bg-opacity-80'>
          Play</button>
        <button className='text-white px-10 py-3 bg-gray-400 mr-1 font-bold rounded-md hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle