import { Flex, Button } from '@chakra-ui/react'
import React from 'react'

const Buttons = ({ bg, fs, fw, w, m, p, onClick, color, Text, bgFocus }) => {
    return (
        <Flex justify={'center'} >
            <Button
                type={'submit'}
                border={'none'} borderRadius={'10px'}
                bg={bg} m={m} fontWeight={fw}
                width={w} p={p}
                color={color} fontSize={fs}
                onClick={onClick}
                _hover={{bg:bg}}
                _active={{bg:bgFocus}}
            >
                {Text}
            </Button>
        </Flex>
    )
}

export default Buttons