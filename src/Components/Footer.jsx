import React from 'react'

// React icons
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'

// Images
import footerLogo from '../../media/footerLogo.svg'
import iconEmail from '../../media/icon-email.svg'
import iconPhone from '../../media/icon-phone.svg'


const Footer = () => {
    return (
    <Box
        height={['auto', 'auto', '430px']}
        bg={'#07043b'}
    >
        <Box
            p={['40px', '40px', '50px', '100px 80px 0']}
            color={'white'}
        >
            <Image
                src={footerLogo}
                pb={'30px'}
            />
            <Flex
                flexDir={['column', 'column', 'row']}
            >
                <Box
                    mr={['0px', '0px', '70px', '160px']}
                >
                    <Flex
                        align={'center'}
                        pb={'20px'}
                    >
                        <Image
                            src={iconEmail}
                            pe={'20px'}
                        />
                        <Text fontSize={['22px', '22px', '18px', '18px']}>Phone: +1-543-123-4567</Text>
                    </Flex>
                    <Flex
                        align={'center'}
                        pb={'20px'}
                    >
                        <Image
                            src={iconPhone}
                            pe={'20px'}
                        />
                        <Text fontSize={['22px', '22px', '18px', '18px']}
                        >example@fylo.com</Text>
                    </Flex>
                </Box>
                <Flex
                    flexDirection={'column'}
                    height={['200px', '200px', '170px', '200px']}
                    justify={'space-between'}
                    fontSize={['20px', '22px', '18px', '24px']}
                    mr={['100px', '100px', '50px', '160px']}
                    mb={['30px', '30px', '0', '0']}
                    mt={['30px', '30px', '0']}
                >
                    <Link to="#" _hover={{ color:'#828fd5' }}>About Us</Link>
                    <Link to="#" _hover={{ color:'#828fd5' }}>Jobs</Link>
                    <Link to="#" _hover={{ color:'#828fd5' }}>Press</Link>
                    <Link to="#" _hover={{ color:'#828fd5' }}>Blog</Link>
                </Flex>

                <Flex
                    flexDirection={'column'}
                    height={['150px', '150px', '120px']}
                    justify={'space-between'}
                    fontSize={['20px', '22px', '18px', '24px']}
                    mr={['100px', '100px', '80px', '160px']}
                    mb={['30px', '30px', '0']}
                >
                    <Link to="#" _hover={{ color:'#828fd5' }}>Contact Us</Link>
                    <Link to="#" _hover={{ color:'#828fd5' }}>Terms</Link>
                    <Link to="#" _hover={{ color:'#828fd5' }}>Privacy</Link>
                </Flex>

                <Box
                    w={['100%', '100%', 'auto', '130px']}
                >
                <Flex
                    justify={'space-between'}
                    align={'center'}
                    mx={'auto'}
                    w={['50%', '50%', 'auto', 'auto']}
                    h={['auto', 'auto', '130px', 'auto']}
                    flexDirection={['row', 'row', 'column', 'row']}
                >
                    <Link 
                        to="#"
                        _hover={{ color:'#828fd5' }}>
                        <RiFacebookCircleLine fontSize={'36px'}/>
                    </Link>

                    <Link 
                        to="#"
                        _hover={{ color:'#828fd5' }}>
                        <TiSocialTwitterCircular fontSize={'40px'}/>
                    </Link>

                    <Link
                        to="#"
                        _hover={{ color:'#828fd5' }}>
                        <RiInstagramLine fontSize={'32px'}/>
                    </Link>
                </Flex>
                </Box>

            </Flex>
        </Box>
    </Box>
    )
}

export default Footer