import { Box, Flex } from '@chakra-ui/react'
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
        console.log(userInfo);
    }, [])

    const handleSubmit =(event) => {
        event.preventDefault;
        if (email === '') {
            toast.error('Last Name cannot be empty');
        }
        if (email !== userInfo.email) {
            toast.error('Your email is incorrect');
        }
        if (!password) {
            toast.error('Please input your password')
        }
        if (password !== userInfo.password) {
            toast.error('Your password is incorrect');
        }
        if (email === userInfo.email && password === userInfo.password) {
            swal({
                icon:'success',
                title:'Congratulations',
                text:'You have logged in.'
            })
            navigate('/login')
        }
    }

    return (
        <Flex
            maxW={'100%'} minHeight={'92vh'}
            mt={['70px', '70px', '50px',]}
            flexDir={['column', 'column', 'row']}
        >
            <LeftSection text={'Login to Your Mansha Account'}/>
            <Box
                w={['100%', '100%', '65%']}
                bg={'twitter.400'} borderRadius={'15px'}
                margin={[ '3%', '4%', '3% 2% 4%', '6% 8% 3%']} h={'auto'}
                padding={['20px 15px', '20px 15px', '30px 20px', '100px']}
            >
                <FormItem
                    Label={'Email Address'} placeholder={'Enter your email'}
                    type={'email'} value={email} name={'email'}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Password onChange={(event) => setPassword(event.target.value)} value={password} dConfirm={'none'} />

                <Buttons bg={'green'} m={'20px auto'} w={'30%'} color={'white'} onClick={handleSubmit} bgFocus={'blue'} Text={'Sign In'} fw={'600'} fs={'22px'} />
            </Box>
        </Flex>
    )
}

export default Login