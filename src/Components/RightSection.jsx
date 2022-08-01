import { Box, Flex, Checkbox, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import Buttons from './Buttons'
import Country from './Country'
import FormItem from './FormItem'
import Gender from './Gender'
import Password from './Password'


const RightSection = () => {
    const initialData = {
        firstName: '',
        lastName: '',
        email: '',
        number: 0,
        password: '',
        confirmPassword: '',
        gender: '',
        country: '',
        agreeTerms: false,
        subscribe: false
    }
    const [userData, setUserData] = useState(initialData);
    const { firstName, lastName, email, number, password, confirmPassword, gender, country, agreeTerms, subscribe } = userData;
    
    const navigate= useNavigate();

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setUserData({ ...userData, [name]: type === 'checkbox' ? checked : value });
    }

    // useEffect(() => {
    //     localStorage.removeItem('userData')
    // }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(userData);
        if (!firstName || firstName.includes(' ')) {
            toast.error('First Name cannot be empty and must not contain space');
        }
        if (!lastName || lastName.includes(' ')) {
            toast.error('Last Name cannot be empty and must not contain space');
        }
        if (!email) {
            toast.error('Email cannot be empty');
        }
        if (!regexEmail.test(email)) {
            toast.error('Looks like your email is not valid')
        }
        if (!number) {
            toast.error('Phone number cannot be empty');
        }
        if (gender === '') {
            toast.error('Please select your gender')
        }
        if (!country) {
            toast.error('Please select your country')
        }
        if (!password) {
            toast.error('Please input your password')
        }
        if (password.length < 7 ){
            toast.error('Your passowrd should be at least 8 characters')
        }
        if (password !== confirmPassword) {
            toast.error('Your password doesn\'t match')
        }
        else if ( firstName && lastName && number && email && gender && country && password &&  (password === confirmPassword) ) {
            swal({
                icon:'success',
                title: 'Congratulations',
                text: `${lastName} ${firstName}, you have successfuly created an account.`
            })
            navigate('/login')
            const userDataSaved = JSON.stringify(userData)

            localStorage.getItem('userData') == null
            ? localStorage.setItem('userData', userDataSaved)

            : (localStorage.removeItem('userData') && localStorage.setItem('userData', userDataSaved))
        }
    }

    return (
        <Box
            w={['100%', '100%', '60%', '65%']} h={'auto'}
            padding={[ '4%', '2.5% 5%', '3% 4% 4%', '3% 6% 4%']}
        >
            <Box
                w={'100%'} as={'form'}
                bg={'twitter.400'}
                height={'auto'}
                borderRadius={'10px'}
                padding={['20px 15px', '20px 15px', '30px 20px', '40px']}
            >
                <Text fontSize={'30px'} textAlign={'center'} fontWeight={700} mb={'20px'} >Register An Account Now</Text>

                <Flex justify={'space-between'} gap={['10px', '10px', '15px', '30px']} flexDir={['column', 'column', 'row']} >
                    <FormItem
                        Label={'First Name'} placeholder={'Enter your last Name'}
                        type={'text'} value={firstName} onChange={handleChange} name={'firstName'}
                    />

                    <FormItem
                        Label={'Last Name'} placeholder={'Enter your last Name'}
                        type={'text'} value={lastName} onChange={handleChange} name={'lastName'}
                    />
                </Flex>

                <Flex justify={'space-between'} gap={['10px', '10px', '15px', '30px']} flexDir={['column', 'column', 'row']}>
                    <FormItem
                        Label={'Email Address'} placeholder={'Enter your email'}
                        type={'email'} value={email} onChange={handleChange} name={'email'}
                    />

                    <FormItem
                        Label={'Phone Number'} placeholder={'Enter your phone number'}
                        type={'number'} value={number} onChange={handleChange} name={'number'}
                    />
                </Flex>

                <Gender onChange={handleChange} />

                <Country onChange={handleChange} />

                <Password onChange={handleChange} value={password} valueConfirm={confirmPassword} />

                <Checkbox
                    checked={agreeTerms}
                    name={'agreeTerms'}
                    type={'checkbox'}
                    onChange={handleChange}
                    _checked={{ color: 'blue', fontWeight: '600' }}
                    colorScheme={'blue'}
                >
                    Do you agree to our terms and conditions?
                </Checkbox><br />

                <Checkbox
                    checked={subscribe}
                    name={'subscribe'} mt={'20px'}
                    type={'checkbox'}
                    onChange={handleChange}
                    _checked={{ color: 'blue', fontWeight: '600' }}
                    colorScheme={'blue'}
                >
                    Do you want to subscribe to our newsletter?
                </Checkbox>

                <Buttons
                    bg={'green'} color={'white'}
                    m={'30px 0 0'} p={'5px 80px'}
                    bgFocus={'green.300'}
                    Text={'Sign Up Now'} onClick={handleSubmit}
                />
            </Box>
        </Box>
    )
}

export default RightSection