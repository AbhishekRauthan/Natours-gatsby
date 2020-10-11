import React from 'react'
import Feature from '../components/Feature';
import Header from '../components/Header'
import Section from '../components/Section'
import '../scss/app.scss';
import '../static/icon-fonts.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Section />
      <Feature />
    </div>
  )
}

export default Home
