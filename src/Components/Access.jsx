import React from 'react'
import { Box, Flex, Heading, Text, Input } from '@chakra-ui/react'
import Buttons from './Buttons'


const Access = () => {
    return (
    <Box
        bg={'#575989'}
    >
        <Flex
        m={['0 20px', '0 20px', '0 50px', '0 80px']}
        w={'auto'}
        h={['auto', 'auto', 'auto', '320px']}
        pt={['30px', '30px', '50px', '100px']}
        pb={['0', '0', '30px', '0']}
        color={'white'}
        flexDir={['column', 'column', 'row', 'row']}
        >
            <Box className='left'
                w={['100%', '100%', '50%', '60%']}
            >
                <Heading
                    m={['0 0 20px 0', '0 0 20px 0', '0 10px 25px 0', '0 30px 25px 0']}
                    fontSize={['24px', '24px', '24px', '24px']}
                    textAlign={['center', 'center', 'start']}
                >
                    Get early access today
                </Heading>

                <Text
                    textAlign={['center', 'center', 'start']}
                    w={['100%', '100%', '80%', '70%']}
                    px={['12%', '12%', '0%']}
                >
                    It only takes a minute to sign up on our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
                </Text>
            </Box>
            <Box className='right'
                width={['100%', '100%', '50%', '40%']}
                mt={['20px', '20px', '0']}
                mb={['50px', '50px', '0']}
            >
                <Input
                    type={'email'}
                    w={'100%'}
                    placeholder={'email@example.com'}
                    bg={'white'}
                    boxShadow={'3px 3px 3px black'}
                    mb={'15px'}
                    p={'7px 15px'}
                    borderRadius={'5px'}
                >
                </Input>
                <Buttons
                    padding={'5px 40px'}
                    Text={'Get Started For Free'}
                    boxShadow={'3px 3px 4px black'}
                    width={['100%', '100%', '100%', 'auto']}
                >
                </Buttons>
            </Box>
        </Flex>

    </Box>
    )
}

export default Access