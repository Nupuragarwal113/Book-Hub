import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>We’ve designed this platform with you in mind, offering a seamless and delightful experience as you explore the world of books.
Discover New Reads: Whether you're searching for a specific title or looking for personalized recommendations, our app makes it easy to find books that match your taste. Simply type in a title, author, or keyword, and our smart search functionality will present you with a range of options, handpicked for you. You can discover a wealth of literary treasures, from timeless classics to contemporary bestsellers.
User-Friendly Interface: We’ve crafted a clean, intuitive interface that lets you focus on what matters most—finding your next great read. Browse through beautifully styled book cards, each displaying essential information to help you make informed choices.
Beautifully Designed: We believe that a great reading experience begins with a visually appealing environment. </p>
            <p className='fs-17'>We’re passionate about books, and we know you are too. Whether you’re an avid reader or someone just looking to explore new genres, our Book Search App is here to guide you through your literary journey. Happy reading!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
