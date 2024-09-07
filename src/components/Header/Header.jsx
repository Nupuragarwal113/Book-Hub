import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Discover your next favorite book with our intuitive Book Library App, designed to cater to book lovers just like you. Whether you're searching for a specific title, exploring new genres, or seeking personalized recommendations, our app makes it easier than ever to dive into the world of books.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header