import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Leftbox = () => {
    return (
    <Box w={['100%','100%','45%']} textAlign={['center', 'center', 'start']}>
        <Text 
            fontSize={'28px'}
            fontWeight={'700'}
            color={'white'}
            lineHeight={'36px'}
            mb={'20px'}
        >
            Learn to code by <br /> watching others
        </Text>
        <Text 
            fontSize={'16px'}
            color={'white'}
        >
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </Text>
    </Box>
    )
}

export default Leftbox