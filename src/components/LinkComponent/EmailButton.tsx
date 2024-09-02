import React from 'react'
import { Button } from '../ui/button'
const EmailButton = () => {
    return (
        <div>
            <Button asChild>
                <a href="mailto:sheridanswiftieclub@gmail.com">Mail</a>
            </Button>
        </div>
    )
}

export default EmailButton
