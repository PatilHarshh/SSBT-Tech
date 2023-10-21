import React from 'react'
import  {AboutBanner } from '../Components/About/AboutBanner';
import  {AboutCard } from '../Components/About/AboutCard';
import { NavBar } from './NavBar';

const About = () => {
  return (
    <>
    <NavBar />
    <AboutBanner />
    <AboutCard />
    </>
  )
}

export default About
