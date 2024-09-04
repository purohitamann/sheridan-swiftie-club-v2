import React from 'react'
import LinkButton from './LinkButton'
import EmailButton from './EmailButton'
const LinkComponent = () => {
    return (
        <div style={{ fontFamily: "Cinzel" }} className='flex-col-reverse text-center text-[#E4E2DD] font-light text-2xl gap-2 w-[60vw] h-[20vh]'>

            <LinkButton LinkLabel="Instagram" LinkUrl="https://www.instagram.com/sheridanswiftieclub/" />
            <LinkButton LinkLabel="Clubs Corner" LinkUrl="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub" />
            <LinkButton LinkLabel="mail" LinkUrl="mailto:sheridanswiftieclub@gmail.com" />

        </div>
    )
}

export default LinkComponent
