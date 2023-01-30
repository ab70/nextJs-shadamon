"use client"

import './globals.css'
import { useEffect } from 'react';

import NavBar from './navBar'

export default function RootLayout({ children }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar/>
        {children}
        
      </body>
    </html>

  )
}
