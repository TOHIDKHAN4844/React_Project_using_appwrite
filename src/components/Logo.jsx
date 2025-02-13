import React from 'react';
import logoImage from '../assets/Screenshot 2025-02-10 043807.png';

function Logo({ width = '150px' }) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logoImage}
        alt="Logo"
        style={{ width: 180 }}
        className="rounded-2xl object-contain"
      />
    </div>
  );
}

export default Logo;
