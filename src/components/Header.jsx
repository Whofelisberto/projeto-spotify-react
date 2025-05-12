import React from 'react';
import logoSpotify from '../assets/logo/spotify-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="logo spotify" />
      <div className='butao'><Link to="/"><FontAwesomeIcon icon={faHouse} className='home'/></Link></div>
    </div>
  );
};

export default Header;
