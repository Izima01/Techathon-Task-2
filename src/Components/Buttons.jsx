import { Button, Text } from '@chakra-ui/react'
import React from 'react'

const Buttons = ({ bgColor, TextBold, Text2, shadow, bgFocus, type, onClick }) => {
    return (
    <Button
        width={'100%'}
        backgroundColor={bgColor}
        boxShadow={`0px 5px 0px 1px ${shadow}`}
        color={'white'}
        type={type}
        onClick={onClick}
        _focus={{
            backgroundColor:bgFocus
        }}
        _hover={{
            bgColor:bgColor
        }}
    >
        <Text><strong>{TextBold}</strong>{Text2}</Text>
    </Button>
    )
}

export default Buttons