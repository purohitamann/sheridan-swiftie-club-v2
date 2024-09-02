import React from 'react'

export default function ThemeWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundImage: 'url(/grey-background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
            }}
        >
            {children}
        </div>
    )
}


