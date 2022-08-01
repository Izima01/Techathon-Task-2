import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

import Buttons from './Buttons'
import FormItem from './FormItem'
import LeftSection from './LeftSection'
import Password from './Password'

const Login = () => {
    const navigate= useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const regData = localStorage.getItem('userData');
        setUserInfo(JSON.parse(regData));
        userInfo && console.log(userInfo);
    }, [])

    const handleSubmit =(event) => {
        event.preventDefault;
        if (email === '') {
            toast.error('Please input your email');
        }
        else if (email !== userInfo.email) {
            toast.error('Your email is incorrect');
        }
        if (!password) {
            toast.error('Please input your password')
        }
        else if (password.length < 8) {
            toast.error('Your password cannot be less than 8 chaacters')
        }
        else if (password !== userInfo.password) {
            toast.error('Your password is incorrect');
        }
        // (email === userInfo.email && password === userInfo.password)
        else {
            swal({
                icon:'success',
                title:'Congratulations',
                text:'You have logged in.'
            })
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            
            navigate('/dashboard');
        }
    }

    return (
        <Flex
            w={'100%'} minHeight={[null, null, null, '91.5vh']}
            mt={['70px', '70px', '50px',]} as={'main'}
            flexDir={['column', 'column', 'row']}
        >
            <LeftSection text={'Login to Your Mansha Account'} />
            <Box
                w={['auto', 'auto', '65%']} h={'auto'}
                bg={'twitter.400'} borderRadius={'15px'}
                margin={[ '3% 4% 10%', '4% 8% 8%', '5% 5% 2%', '6% 8% 4%']}
                padding={['20px', '20px 40px', '30px 20px', '40px']}
            >
                <Text fontSize={'30px'} textAlign={'center'} fontWeight={700} mb={'20px'} >Login To Your Account</Text>

                <FormItem
                    Label={'Email Address'} placeholder={'Enter your email'}
                    type={'email'} value={email} name={'email'}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Password onChange={(event) => setPassword(event.target.value)} value={password} dConfirm={'none'} />

                <Buttons bg={'green'} m={'20px auto'} w={['50%', '', '30%']} color={'white'} onClick={handleSubmit} bgFocus={'blue'} Text={'Sign In'} fw={'600'} fs={'22px'} />
            </Box>
        </Flex>
    )
}

export default Login