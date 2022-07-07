import React from 'react'
import { Box, Flex, Heading, Text, Link, Image } from '@chakra-ui/react'
import bgCurveD from '../../media/bg-curve-desktop.svg'
import bgCurveM from '../../media/bg-curve-mobile.svg'
import arrow from '../../media/icon-arrow.svg'
import quotes from '../../media/icon-quotes.svg'
import avatar from '../../media/avatar-testimonial.jpg'
import illustration2 from '../../media/illustration-2.svg'


const Productive = () => {
    return (
    <Box 
        h={['auto', 'auto', 'auto', '600px']}
        w={'auto'}
        mt={['30px', '30px', '0']}
    >
        <Box 
            height={'100px'}
        >
            <Image
                src={bgCurveD}
                display={['none', 'none', 'block']}
            />
            <Image
                src={bgCurveM}
                display={['inline', 'inline', 'none']}
            />
        </Box>
        <Box
            bg={'#f9f8fe'}
            h={'auto'}
            mt={['-60px', '-60px', '-40px', '-10px']}
            p={['10px 10px', '0 60px 30px', '0px 80px -10px']}
        >
            <Flex
                flexDirection={['column-reverse', 'column-reverse', 'row' ]}
                mt={['50px', '50px', '0px']}
            >
                <Box className='left' w={['100%', '100%', '50%', '60%']}>
                    <Heading
                        fontSize={['19px', '19px', '32px']}
                        fontWeight={[600, 600, 600]}
                        my={'20px'}
                        textAlign={['center', 'center', 'start']}
                    >
                        Stay productive, wherever you are
                    </Heading>
                    <Text
                        mb={'15px'}
                        w={['98%', '98%', '75%']}
                        fontSize={'14px'}
                        lineHeight={'20px'}
                        color={'rgb(100, 98, 122)'}
                    >
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                    </Text>
                    <Text
                        mb={'20px'}
                        w={['98%', '98%', '75%']}
                        fontSize={'14px'}
                        lineHeight={'20px'}
                        color={'rgb(100, 98, 122)'}
                    >
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!
                    </Text>

                    <Link
                        display={'flex'}
                        alignItems={'center'}
                        to="#" pb={'7px'} px={'3px'}
                        borderBottom={'2px solid #3c9f8a'} 
                        width={['190px', '172px']}
                        mx={['auto', 'auto', '0']}
                    >
                        <Text
                            color={'#3c9f8a'}
                            mr={'8px'} 
                            fontWeight={'500'}
                            fontSize={['18px', '18px', '14px']}
                        >
                            See how Fylo works
                        </Text>
                        <Image
                            src={arrow}
                            boxSize={['20px', '20px', '18px']}
                            objectFit={'cover'}
                        />
                    </Link>

                    <Box className='testimonial'
                        bg={'white'}
                        width={['90%', '90%', '100%', '70%']}
                        mx={['5%', '5%', '0']}
                        p={['6% 8%', '3% 5%']}
                        my={'30px'}
                        borderRadius={'10px'}
                        display={['block', 'block', 'none', 'block' ]}
                    >
                        <Image
                            src={quotes}
                            boxSize={'14px'}
                            objectFit={'cover'}
                        />
                        <Text
                            my={'15px'}
                            color={'#312d44'}
                            fontSize={['14px', '14px', '18px']}
                        >
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                        </Text>

                        <Flex className='info'
                            align={'center'}
                            width={'80%'}
                            pt={'5px'}
                        >
                            <Image 
                                src={avatar}
                                boxSize='35px'
                                borderRadius={'full'}
                                objectFit={'cover'}
                            />
                            <Box pl={'10px'}>
                                <Text fontSize={'14px'} pb={'2px'} fontWeight={'bold'}>Kyle Burton</Text>
                                <Text fontSize={'10px'}>Founder & CEO, Huddle</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Box className='right'
                    margin={['0', '0', '50px 0 20px']}
                    w={['100%', '100%', '50%', '40%']}
                    h={['320px', '320px', '320px', 'auto']}
                >
                    <img src={illustration2} />
                </Box>
            </Flex>

            <Box className='testimonial'
                bg={'white'}
                width={'72%'}
                p={'3% 5%'}
                m={'-40px 14% 0 '}
                borderRadius={'10px'}
                display={['none', 'none', 'block', 'none' ]}
            >
                <Image
                    src={quotes}
                    boxSize={'14px'}
                    objectFit={'cover'}
                />
                <Text
                    my={'15px'}
                    color={'#312d44'}
                    fontSize={'18px'}
                >
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </Text>

                <Flex className='info'
                    align={'center'}
                    width={'80%'}
                    pt={'5px'}
                >
                    <Image 
                        src={avatar}
                        boxSize='35px'
                        borderRadius={'full'}
                        objectFit={'cover'}
                    />
                    <Box pl={'10px'}>
                        <Text fontSize={'14px'} pb={'2px'} fontWeight={'bold'}>Kyle Burton</Text>
                        <Text fontSize={'10px'}>Founder & CEO, Huddle</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </Box>
    )
}

export default Productive