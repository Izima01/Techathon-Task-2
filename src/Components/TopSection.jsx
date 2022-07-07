import React from 'react'
import { Box, Heading, HStack, Text, Input, Flex } from '@chakra-ui/react'
import illustration1 from '../../media/illustration-1.svg'
import Buttons from './Buttons'

const TopSection = () => {
    return (
    <HStack 
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        width={'auto'}
        margin={['80px 20px 0', '60px 20px 0', '-100px 40px -40px', '0 80px 20px', '0 80px 20px']}
        height={['auto', 'auto', '480px']}
    >
        <Box
            w={['100%', '100%', '55%', '45%']}
            mt={['25px', '25px', '0', '0']}
        >
            <Heading
                fontSize={['22px', '22px', '32px']}
                fontWeight={[600 ,500]}
                lineHeight={['30px', '30px', '45px']}
                color={'#000025'}
                textAlign={['center', 'center', 'start']}
                >
                    All your files in one secure location, accessible anywhere.
            </Heading>
            <Text
                fontSize={'14px'}
                textAlign={['center', 'center', 'start']}
                color={'#000025'}
                margin={['10px 0 20px 0','10px 0 20px 0' ,'20px 40px 20px 0']}
            >
                Fylo stores your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family, and co-workers.
            </Text>
            <Flex
                flexDirection={['column', 'column', 'row']}
                justify={'space-between'}
                width={['100%','100%', '85%']}
            >
                <Box
                    width={['100%', '100%', '58%']}
                    mb={['20px', '20px', '0']}
                >
                    <Input type={'email'} placeholder={'Enter your email...'}></Input>
                </Box>
                <Box width={['100%', '100%', '38%']}>
                    <Buttons
                        padding={'5px 10px'}
                        boxShadow={'2px 2px 8px grey'}
                        Text={'Get Started'}
                        width={'100%'}
                    >
                </Buttons>
                </Box>
            </Flex>
        </Box>
        <Box
            w={['100%','100%', '45%','55%']}
        > 
            <img src={illustration1} alt="" />
        </Box>
    </HStack>
    )
}

export default TopSection