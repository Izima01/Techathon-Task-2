import React from 'react'
import { Button } from '@chakra-ui/react'

const Buttons = ({padding, boxShadow, Text, width, height }) => {
    return (
    <div>
        <Button
            bg={'#2f65f9'}
            padding={padding}
            boxShadow={boxShadow}
            color={'white'}
            borderRadius={'3px'}
            width={width}
            height={height}
            _hover={{ backgroundColor:'#6b9bff' }}
        >
            {Text}
        </Button>
    </div>
    )
}

export default Buttons