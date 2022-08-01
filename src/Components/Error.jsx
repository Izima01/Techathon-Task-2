import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiErrorAlt } from 'react-icons/bi'

const Error = () => {
    return (
    <Flex width={'100%'} height={'100vh'} justify={'center'} align={'center'} bg={'red'}>
        <Box>
            {/* <Image
                src='BiErrorAlt'
                // objectFit={'cover'}
                fontSize={'48px'}
            /> */}
            <Text fontSize={'64px'} fontWeight={700}>Error. Please go Back</Text>
        </Box>
    </Flex>
    )
}

export default Error