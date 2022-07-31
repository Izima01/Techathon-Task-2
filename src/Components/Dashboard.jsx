import { Flex } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
    return (
    <Flex
        w={'100%'} minHeight={'90vh'} mt={['70px', '70px', '60px',]}
        flexDir={['column', 'column', 'row']}
    >
        Dashboard
    </Flex>
    )
}

export default Dashboard