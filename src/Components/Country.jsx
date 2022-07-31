import { Flex, FormControl, FormLabel, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const Country = ({onChange}) => {

    return (
    <Flex>
        <FormControl border={'transparent'} m={'0 0 20px'}>
            <FormLabel mb={'5px'}>Country of Residence</FormLabel>
            <Select
                name={'country'} bg={'white'} border={'2px solid black'}
                onChange={onChange}
                placeholder={'Select your Country'}
            >
                <option value="nigeria">Nigeria</option>
                <option value="south-africa">South Africa</option>
                <option value="egypt">Egypt</option>
                <option value="brazil">Brazil</option>
                <option value="australia">Australia</option>
                <option value="france">France</option>
            </Select>
        </FormControl>
    </Flex>
    )
}

export default Country