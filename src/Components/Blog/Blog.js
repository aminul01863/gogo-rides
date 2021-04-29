import React from 'react';
import logo from '../../images/Facebook.png';
import logo1 from '../../images/Twitter.png';
import logo2 from '../../images/YouTube.png';
import './Blog.css'

const Blog = () => {
    return (
        <div className="text-center bg-dark text-light container-xxl details">
            <h1>GOGO RIDERS</h1>
            <footer className="footer mt-5 pt-5 bg-dark">
                <a href="https://www.facebook.com/profile.php?id=100009531166791"><img src={logo} alt="" /></a>
                <a href="https://twitter.com/?lang=en"> <img src={logo1} alt="" /></a>
                <a href="https://www.youtube.com/"><img src={logo2} alt="" /></a>
                <p>All rights reserved by gogo ride</p>
            </footer>
        </div>
    );
};

export default Blog;