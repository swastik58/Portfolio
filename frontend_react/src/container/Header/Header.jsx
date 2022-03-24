import React from 'react';
import { motion } from 'framer-motion';

import {AppWrap}  from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">SWASTIK</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Gaming Enthusiast</p>
          <p className="p-text">Music Lover</p>
          <p className="p-text">Movies and Series Freak</p>
        </div>

        <a href="https://drive.google.com/drive/folders/1vs5TZzgFMC28uOXth4_LVBDYtYRZE0tD?usp=sharing" 
            target="_blank" rel="noreferrer"
            style={{textDecoration: 'none'}}    
        >
          <div className="tag-cmp app__flex">
            <p className="p-text">Click here</p>
            <p className="p-text">to view my Résumé </p>
          </div>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.photo} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.cpp, images.react, images.css].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

  </div>
);

export default AppWrap(Header, 'home');