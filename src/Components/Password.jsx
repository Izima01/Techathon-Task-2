import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { BsEyeSlash } from 'react-icons/bs'

const Password = ({ onChange, value, valueConfirm, dConfirm }) => {

    const [show, setShow]= useState(false);
    const [showConfirm, setShowConfirm]= useState(false);
    
    const handlePassword = () => {
        setShow((prev)=> !prev);
    }

    const handlePasswordConfirm = () => {
        setShowConfirm((prev)=> !prev);
    }

    return (
        <Box>
            <FormControl position={'relative'} w={'100%'} m={'0 0 20px'} border={'none'} id={'password'}>
                <FormLabel mb={'5px'}>Password</FormLabel>
                <Input
                    type={ show === true ? 'text' : 'password' }
                    width={'100%'} bg={'white'}
                    value={value}
                    placeholder={'Enter Password'}
                    name={'password'}
                    onChange={onChange}
                />
                <Button
                    pos={'absolute'} top={'30px'} right={'10px'}
                    bg={'none'} color={'twitter.700'}
                    borderRadius={'none'} padding={'0px 5px'}
                    onClick={handlePassword}
                    _hover= {{ bg:'none' }}
                    _focus= {{ bg:'none' }}
                    fontSize={'24px'}
                    zIndex={5}
                >
                    {show ? <BsEyeSlash /> : <BsEye />}
                </Button>
            </FormControl>
            
            <FormControl position={'relative'} w={'100%'} m={'0 0 20px'} border={'none'} id={'confirmPassword'} display={dConfirm}>
                <FormLabel mb={'5px'}>Confirm Password</FormLabel>
                <Input
                    type={ showConfirm === true ? 'text' : 'password' }
                    width={'100%'} bg={'white'}
                    value={valueConfirm}
                    placeholder={'Enter Password'}
                    name={'confirmPassword'}
                    onChange={onChange}
                />
                <Button
                    pos={'absolute'} top={'30px'} right={'10px'}
                    bg={'none'} color={'twitter.700'}
                    borderRadius={'none'} padding={'0px 5px'}
                    onClick={handlePasswordConfirm}
                    _hover= {{ bg:'none' }}
                    _focus= {{ bg:'none' }}
                    fontSize={'24px'}
                    zIndex={5}
                >
                    {showConfirm ? <BsEyeSlash /> : <BsEye />}
                </Button>
            </FormControl>
        </Box>
    )
}

export default Password