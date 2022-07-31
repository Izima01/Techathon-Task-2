import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const FormItem = ({ type, value, placeholder, onChange, name, w, border, color, Label }) => {
    return (
        <FormControl pos={'relative'} border={'none'} margin={'0 0 20px'}>
            <FormLabel mb={'5px'}>{Label}</FormLabel>
            <Input
                width={w} outline={'none'} m={'0'} onChange={onChange}
                type={type} value={value} placeholder={placeholder}
                name={name} paddingStart={'25px'} border={border}
                color={color} fontWeight={600} bg={'white'}
                _hover={{ border: border, color: 'black', outline:'none' }}
                _focus={{ border: border, color: 'black', outline:'none' }}
                _placeholder= {{ color:color }}
            />
        </FormControl>
    )
}

export default FormItem