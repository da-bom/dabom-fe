'use client';

import React from 'react';

import DefaultLogo from '../assets/icons/logo.svg';
import AdminLogo from '../assets/icons/logo_admin.svg';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type?: 'admin' | 'default';
  sx?: React.CSSProperties;
}

const logoMap = {
  admin: AdminLogo,
  default: DefaultLogo,
};

const Logo = ({ type = 'default', sx, style, ...props }: LogoProps) => {
  const SelectedLogo = logoMap[type];

  const src =
    (SelectedLogo as unknown as { src?: string })?.src ?? (SelectedLogo as unknown as string);

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="logo" style={{ ...style, ...sx }} {...props} />;
};

export default Logo;
