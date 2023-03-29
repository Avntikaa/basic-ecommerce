import React from 'react'
import ShowData from '../components/ShowData'
import Header from '../components/Header'
import HeaderSummary from '../components/HeaderSummary'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
<HeaderSummary/>
<ShowData />
<Footer/>
    </div>
  )
}

export default Home