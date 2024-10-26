import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black p-2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4 border rounded-md col-span-9' placeholder='What would you like to watch today' />
            <button className='p-4 m-4 bg-red-700 text-white rounded-md text-md col-span-3'>Submit</button>
        </form>

    </div>
  )
}

export default GPTSearchBar