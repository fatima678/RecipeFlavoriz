import React from 'react'

import Header from '../components/Header'
import Categories from '../components/Categories'
import PopularRecipes from '../components/PopularRecipes'

import Features from '../components/Features'
import NewsletterCTA from '../components/NewsLetterCTA'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div>
       
        <Header/>
        <Categories/>
        {/* <PopularRecipes/> */}
        <Features/>
        <NewsletterCTA/>
        <Testimonials/>
       
    </div>
  )
}

export default Home