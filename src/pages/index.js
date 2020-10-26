import React from 'react'
import Booking from '../components/Booking';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Navigation from '../components/Navigation';
import Popup from '../components/Popup';
import Section from '../components/Section'
import Stories from '../components/Stories';
import Tours from '../components/Tours';
import '../scss/app.scss';
import '../static/icon-fonts.css';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Section />
        <Feature />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup />
    </div>
  )
}

export default Home
