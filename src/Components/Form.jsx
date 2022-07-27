import { Flex, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react'

import FormItem from './FormItem'
import Buttons from './Buttons'


const Form = () => {
    const initialData = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    }
    const [userData, setUserData] = useState(initialData);
    const { firstName, lastName, emailAddress, password } = userData;
    
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({...userData, [name] : value});
    }
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!firstName) {
            setFirstNameError(true);
            // errors.firstName=true;
        }
        if (firstName) {
            setFirstNameError(false)
        }

        if (!lastName) {
            setLastNameError(true);
            // errors.firstName=true;
        }
        if (lastName) {
            setLastNameError(false)
        }
        if (!emailAddress || regex.test(emailAddress)===false) {
            setEmailError(true);
        }
        if (emailAddress && regex.test(emailAddress)===true) {
            setEmailError(false)
        }

        if (password.length<=7) {
            setPasswordError(true)
        }
        if (password.length>=8) {
            setPasswordError(false)
        }
        else {
            return
        }
    }

    return (
        <VStack
            background={'white'} w={'100%'} h={'auto'} m={'20px 0'} borderRadius={'10px'}
            padding={'30px'} as={'form'} boxShadow={'0px 5px 0px 0px hsla(0, 0%, 0%, 0.3)'}
        >
            <FormItem
                mb={'20px'} placeholder={'First Name'} type={'text'} value={firstName}
                onChange={handleChange} name={'firstName'}
                displayError={firstNameError ? 'block' : 'none'}
                errorText={'First name can not be empty'}
                border={firstNameError ? '2px solid hsl(0, 100%, 74%)' : '1px solid black'}
                color={firstNameError ? 'hsl(0, 100%, 74%)' : 'grey' }
            />

            <FormItem
                mb={'20px'} placeholder={'Last Name'} type={'text'} value={lastName}
                onChange={handleChange} name={'lastName'}
                displayError={lastNameError ? 'block' : 'none'}
                errorText={'Last name can not be empty'}
                border={lastNameError ? '2px solid hsl(0, 100%, 74%)' : '1px solid black'}
                color={lastNameError ? 'hsl(0, 100%, 74%)' : 'grey' }
            />

            <FormItem
                mb={'20px'} placeholder={'Email Address'} value={emailAddress} type={'email'}
                onChange={handleChange} name={'emailAddress'}
                errorText={'Looks like this is not an email'}
                displayError={emailError ? 'block' : 'none'}
                border={emailError ? '2px solid hsl(0, 100%, 74%)' : '1px solid black'}
                color={emailError ? 'hsl(0, 100%, 74%)' : 'grey' }
            />

            <FormItem
                mb={'20px'} placeholder={'Password'} value={password} type={'password'}
                onChange={handleChange} name={'password'}
                errorText={'Password can not be empty'}
                displayError={passwordError ? 'block' : 'none'}
                border={passwordError ? '2px solid hsl(0, 100%, 74%)' : '1px solid black'}
                color={passwordError ? 'hsl(0, 100%, 74%)' : 'grey' }
            />

            <Buttons
                bgColor={'hsl(154, 59%, 51%)'}
                TextBold={''}
                Text2={'CLAIM YOUR FREE TRIAL'}
                shadow={'hsla(154, 59%, 51%, 0.7)'}
                bgFocus={'hsla(154, 59%, 51%, 0.6)'}
                type={'submit'} onClick={handleSubmit}
            />

            <Flex align={'center'} justify={'space-between'} pt={'10px'}>
                <Text fontSize={'15px'} color={'hsl(246, 25%, 77%)'}
                >By clicking the button, you are agreeing to our</Text>

                <Text fontSize={'15px'} color={'hsl(0, 100%, 74%)'} ps={'5px'} fontWeight={'700'}
                >Terms and Services</Text>
            </Flex>
        </VStack>
    )
}

export default Form