import React from 'react'
import Header from '../components/Header'
import HomeHeaderSummary from '../components/HomeHeaderSummary'
import Footer from '../components/Footer'
import HomeMainContent from '../components/HomeMainContent'

const Home = () => {
  return (
    <div>
        <Header />
<HomeHeaderSummary/>
<HomeMainContent/>
<Footer/>
    </div>
  )
}

export default Home