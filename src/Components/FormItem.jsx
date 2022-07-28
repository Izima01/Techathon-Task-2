import { FormControl, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import errorIcon from '../../images/icon-error.svg'

const FormItem = ({ type, value, placeholder, mb, onChange, name, displayError, errorText, border, color }) => {
    // const errorText = useRef();
    // const errorImg = useRef();

    return (
        <FormControl pos={'relative'} border={'none'}>
            <Input
                w={'100%'} outline={'none'} mb={mb} onChange={onChange}
                type={type} value={value} placeholder={placeholder}
                name={name} paddingStart={'25px'} border={border}
                color={color} fontWeight={600}
                _hover={{ border: border, color: 'black', outline:'none' }}
                _focus={{ border: border, color: 'black', outline:'none' }}
                _placeholder= {{ color:color }}
            />
            <Img
                src={errorIcon}
                pos={'absolute'}
                top={'8px'}
                right={'20px'}
                display={displayError}
                // ref={errorImg}
            />
            <Text
                color={'hsl(0, 100%, 74%)'}
                textAlign={'end'}
                fontWeight={'600'}
                pos={'absolute'}
                bottom={'2px'}
                right={'2px'}
                display={displayError}
                fontSize={'14px'}
            ><em>{errorText}</em></Text>
        </FormControl>
    )
}

export default FormItem