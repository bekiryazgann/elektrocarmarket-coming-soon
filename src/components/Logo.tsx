import React from 'react';
import MainLogo from './MainLogo';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-12 w-full max-w-lg">
      <MainLogo className="w-full h-auto drop-shadow-sm" />
    </div>
  );
};

export default Logo;
