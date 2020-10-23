import React from 'react'
import Booking from '../components/Booking';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Section from '../components/Section'
import Stories from '../components/Stories';
import Tours from '../components/Tours';
import '../scss/app.scss';
import '../static/icon-fonts.css';

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <Section />
        <Feature />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default Home
