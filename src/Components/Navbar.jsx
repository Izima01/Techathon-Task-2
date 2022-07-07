import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import Logo from '../../media/logo.svg'

const Navbar = () => {
    return (
        <Box 
            w={['90%', '90%', 'auto']}
            margin={['0 5%', '0 5%', '0 50px','0 80px']}
            py={'30px'}
        >
            <Flex
                justify={'space-between'}
                align={'center'}
                w={'100%'}
            >
                <Box
                    width={['100px', '100px', '130px', '170px']}
                >
                    <img src={Logo} alt="" />
                </Box>
                <Flex w={['50%', '50%', '30%', '25%']} justify={'space-between'}>
                    <Link 
                        to="#" fontSize={'14px'}
                        _hover={{textDecoration:'none', transform:'scale(1.2)'}}
                    >
                        Features
                    </Link>

                    <Link 
                        to="#" fontSize={'14px'}
                        _hover={{textDecoration:'none', transform:'scale(1.2)'}}
                    >
                        Team
                    </Link>
                    
                    <Link
                        to="#" fontSize={'14px'}
                        _hover={{textDecoration:'none', transform:'scale(1.2)'}}
                    >
                        Sign In
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar