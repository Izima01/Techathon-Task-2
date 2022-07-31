import { Flex, Text, Link, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClick =() => {
        setShow((prev)=> !prev)
    }

    return (
    <Flex
        height={['50px', '50px', '70px']} borderBottom={'1px solid black'} bg={'white'}
        p={['0 10px 10px', '0 10 10px', '10px 60px']} align={'center'} justify={'space-between'}
        pos={'fixed'} top={'0'} zIndex={100} left={0} right={0}
        flexDir={['column', 'column', 'row']}
    >
        <Flex justify={'space-between'} align={'center'} w={['100%', '100%', '40%']}>
            <Text
                fontWeight={700} ps={['30px', '30px', null]}
                fontStyle={'italic'} w={['100%', '100%', null]}
                color={'#EC1C24'} fontSize={'4xl'}
                >
                    Mansha
                </Text>

            <Button
                ps={'auto'}
                display={['block', 'block', 'none']} bg={'none'}
                onClick={handleClick} _hover={{bg:'none'}}
                _active={{bg:'none'}} justifySelf={'end'}
            >
                {<GiHamburgerMenu />}
            </Button>
        </Flex>
        
        <Flex
            as={'nav'} height={'auto'}
            gap={'5'} bg={'white'} overflow={ show ? 'none' : 'hidden'}
            padding={['10px 20px', '10px 20px', '0']} color={'blue'}
            flexDir={['column', 'column', 'row']} w={['100%', '100%', '60%', '36%']}
            fontSize={'24px'} fontWeight={500} justify={'space-between'} 
        >
            <NavLink to={'/'}
                style={({ isActive }) =>
                isActive ? {color:'red', fontWeight:'600', borderBottom:'5px solid red', paddingBottom:'10px'} : {color:'blue'}
            }>
                Register
            </NavLink>

            <NavLink to={'/login'}
                style={({ isActive }) =>
                isActive ? {color:'red', fontWeight:'600', borderBottom:'5px solid red', paddingBottom:'10px'} : {color:'blue'}
            }>
                Login
            </NavLink>

            <NavLink to={'/dashboard'}
                style={({ isActive }) =>
                isActive ? {color:'red', fontWeight:'600', borderBottom:'5px solid red', paddingBottom:'10px' } : {color:'blue'}
            }>
                Dashboard
            </NavLink>
        </Flex>
    </Flex>
    )
}

export default Header