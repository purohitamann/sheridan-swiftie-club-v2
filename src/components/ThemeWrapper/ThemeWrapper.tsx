import React from 'react'
import { Inter } from 'next/font/google';
import './ThemeWrapper.css';
export default function ThemeWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="theme-wrapper">
            {children}
        </div>
    )
}


