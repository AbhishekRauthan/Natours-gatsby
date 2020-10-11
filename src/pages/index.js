import React from 'react'
import Feature from '../components/Feature';
import Header from '../components/Header'
import Section from '../components/Section'
import Tours from '../components/Tours';
import '../scss/app.scss';
import '../static/icon-fonts.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Section />
      <Feature />
      <Tours />
    </div>
  )
}

export default Home
