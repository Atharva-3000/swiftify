"use client"

import React from 'react'
import './globals.css';
import Navbar from './header/Navbar'
import Landing from './landing/Landing'
import LandFooter from './footers/LandFooter'
import FileAccess from './fileAccess/page';
import Loader from './loader/page';

const Page = () => {
  return (
    <div>
      {/* <Navbar />
      <Landing />
      <LandFooter /> */}
      {/* <FileAccess/> */}
      <Loader/>
    </div>
  )
}

export default Page