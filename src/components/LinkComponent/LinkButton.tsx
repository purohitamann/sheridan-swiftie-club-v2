import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
type Props = {
    LinkLabel: string,
    LinkUrl: string
}
export default function LinkComponent(Props: Props) {
    return (

        <div className='flex justify-center align-center items-center p-2 text-center'>
            <a style={{ fontFamily: "Cinzel" }} className='text-[#E4E2DD] text-2xl' href={Props.LinkUrl}>{Props.LinkLabel}</a>
        </div>

    )
}

