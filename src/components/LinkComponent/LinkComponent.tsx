import React from 'react'
import LinkButton from './LinkButton'
import { useState } from 'react'
const LinkComponent = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    if (typeof window !== 'undefined') {
        const isSmallScreen = window.innerWidth < 768;
        setIsSmallScreen(isSmallScreen);
    }

    return (
        <div className={isSmallScreen ? 'flex-col  justify-center align-center items-center ' : 'flex  justify-center align-center items-center '}>

            <LinkButton LinkLabel="Instagram" LinkUrl="https://www.instagram.com/sheridanswiftieclub/" />
            <LinkButton LinkLabel="Clubs Corner" LinkUrl="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub" />
            <LinkButton LinkLabel="Mail" LinkUrl="mailto:sheridanswiftieclub@gmail.com" />


        </div>
    )
}

export default LinkComponent
