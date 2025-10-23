import React from 'react'

import Header from '../components/Header'
import Categories from '../components/Categories'
import PopularRecipes from '../components/PopularRecipes'


function Home() {
  return (
    <div>
       
        <Header/>
        <Categories/>
        <PopularRecipes/>
       
    </div>
  )
}

export default Home