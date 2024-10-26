import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { LOGIN_BG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img
                src={LOGIN_BG}
                alt="headerbg"
                className="w-full h-[100vh] object-cover bg-cover bg-center"
            />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch