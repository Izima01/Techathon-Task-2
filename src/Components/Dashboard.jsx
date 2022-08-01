import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from './Buttons'
import FormItem from './FormItem'
import LeftSection from './LeftSection'
// import { image } from '../../images/image-victor.jpg'

const Dashboard = () => {
    const navigate= useNavigate();
    const [userData, setUserData] = useState({});

    let { firstName, lastName, email, number, password, confirmPassword, gender, country, agreeTerms, subscribe } = userData;

    const handleClick = (event) => {
        event.preventDefault;
        swal({
            title: "Are you sure you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("You have logged out now.", {
                icon: "success",
                });
                navigate('/login')
                localStorage.removeItem('userData')
                localStorage.removeItem('email')
                localStorage.removeItem('password')
            }
        })
    }

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userData'))
        setUserData(userInfo);
    }, [])
    

    return (
    <Flex
        w={'100%'} minHeight={'90vh'} mt={['70px', '70px', '60px',]}
        flexDir={['column', 'column', 'row']}
    >
        <LeftSection text={'Here\'s Your Dashboard'}/>
        <Box
            padding={[ '4%', '2.5% 5%', '3% 4% 4%', '3% 6% 4%']} w={['100%', '100%', '65%']}
        >
            <Flex
                w={'100%'} borderRadius={'20px'} bg={'twitter.400'}
                height={'auto'} flexDirection={'column'}
                justify={'center'} padding={['20px', '20px 30px', '40px 30px', '40px 60px']}
            >
                <Text fontSize={'36px'} textAlign={'center'} as={'h1'} color={'red'} fontWeight={700} mb={'10px'}>Profile</Text>

                <Flex flexDir={'column'} width={'auto'} >
                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={'20px'} fontSize={['26px', '28px', '30px', '32px']} color={'blue.50'} fontWeight={'bold'}>Name:</Text>
                        <Text fontSize={['18px', '20px', '22px','24px']}>{lastName} {firstName}</Text>
                    </Flex>

                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={'20px'} fontSize={['26px', '28px', '32px']} color={'blue.50'} fontWeight={'bold'}>Gender:</Text>
                        <Text fontSize={['18px', '20px', '24px']}>{gender}</Text>
                    </Flex>

                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={'15px'} fontSize={['26px', '28px', '32px']} color={'blue.50'} fontWeight={'bold'}>Phone Number:</Text>
                        <Text fontSize={['18px', '20px', '24px']}>{number}</Text>
                    </Flex>

                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={['0', '20px', '15px', '20px']} fontSize={['24px', '26px', '32px']} color={'blue.50'} fontWeight={'bold'}>Email Address:</Text>
                        <Text fontSize={['16px', '19px', '24px']}>{email}</Text>
                    </Flex>

                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={'20px'} fontSize={['28px', '28px', '32px']} color={'blue.50'} fontWeight={'bold'}>Country:</Text>
                        <Text fontSize={['18px', '20px', '24px']}>{country}</Text>
                    </Flex>

                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={['0', '10px','20px']} fontSize={['26px', '28px', '32px']} color={'blue.50'} fontWeight={'bold'}>Subscribe to Newsletter:</Text>
                        <Text fontSize={['18px', '20px', '24px']}>{subscribe ? 'True' : 'False'}</Text>
                    </Flex>

                    <Flex my={['8px', '10px', '12px']} align={'center'}>
                        <Text me={['0', '10px','20px']} fontSize={['25px', '28px', '32px']} color={'blue.50'} fontWeight={'bold'}>Agree to Terms And Conditions:</Text>
                        <Text fontSize={['18px', '20px', '24px']}>{agreeTerms ? 'True' : 'False'}</Text>
                    </Flex>
                </Flex>

                <Buttons
                    bg={'red'} m={'20px auto'} fw={'600'}
                    w={'40%'} p={'8px 25px'} color={'blue'}
                    fs={'22px'} onClick={handleClick} bgFocus={'red.500'} Text={'Sign Out'}
                />
            </Flex>
        </Box>
    </Flex>
    )
}

export default Dashboard