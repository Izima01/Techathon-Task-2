import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Register = () => {
    return (
        <Flex w={'100%'} minHeight={'auto'} mt={['70px', '70px', '50px',]} flexDir={['column', 'column', 'row']}>
            <LeftSection text={'Create a Mansha account today'}/>
            <RightSection />
        </Flex>
    )
}

export default Register