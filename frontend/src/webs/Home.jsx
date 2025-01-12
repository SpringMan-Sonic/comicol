import React from 'react'
import Frame from '../components/frame'
import Latest from '../components/Latest'
import Bestseller from '../components/Bestseller'
import Policy from '../components/Policy'
import Newsletterbox from '../components/Newsletterbox'

const Home = () => {
  return (
    <div>
      <Frame/>
      <Latest/>
      <Bestseller/>
      <Policy/>
      <Newsletterbox/>
    </div>
  )
}

export default Home