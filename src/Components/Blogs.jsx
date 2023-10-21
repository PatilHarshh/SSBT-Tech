import React from 'react';
import { NavBar } from './NavBar';
import  {BlogBanner } from '../Components/Blogs/BlogBanner';
import { BlogCard } from '../Components/Blogs/BlogCard';


const Blogs = () => {
  return (
    <>
      <NavBar />
      <BlogBanner />
      <BlogCard />
    </>
  )
}

export default Blogs
