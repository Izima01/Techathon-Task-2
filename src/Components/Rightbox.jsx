import { Box } from '@chakra-ui/react'
import React from 'react'

import Buttons from './Buttons'

const Rightbox = ({ children }) => {
    

    return (
    <Box w={['100%','100%','55%']}>
        <Buttons
            bgColor={'hsl(248, 32%, 49%)'}
            TextBold={'Try it free 7 days '}
            Text2={'then $20/mo. thereafter'}
            shadow={'hsla(249, 10%, 26%, 0.5)'}
            bgFocus={'hsl(248, 32%, 49%)'}
            p={['0 100px', '0 100px', '0']}
            // textW={'20%'}
        />
        <Box>{ children }</Box>
    </Box>
    )
}

export default Rightbox