import { Flex, FormControl, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'

const Gender = ({onChange}) => {

    return (
    <FormControl w={'100%'} m={'0 0 20px'}>
        <FormLabel mb={'5px'}>Gender</FormLabel>
        <Flex gap={'30px'}>
            <div>
                <input type={'radio'} name="gender" value='Male' onChange={onChange}/>Male
            </div>
            <div>
                <input type={'radio'} name="gender" value='Female' onChange={onChange}/>Female
            </div>
            <div>
                <input type={'radio'} name="gender" value='Others' onChange={onChange}/>Others
            </div>
        </Flex>
    </FormControl>
    )
}

export default Gender