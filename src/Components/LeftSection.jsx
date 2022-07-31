import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const LeftSection = ({text}) => {
    return (
    <Box
        w={['100%', '100%' ,'35%']} height={'auto'} pos={'relative'}
        bgGradient={'linear(to-br, red.100 0%, red.300 40%, red.500 75%)'} display={['none', 'none', 'block']}
    >
        <Text pos={'absolute'} top={'40%'} left={'12%'} color={'white'} fontSize={'3xl'} fontWeight={600} lineHeight={'40px'}>
            {text}
        </Text>
    </Box>
    )
}

export default LeftSection