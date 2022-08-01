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
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="Egypt">Egypt</option>
                <option value="Brazil">Brazil</option>
                <option value="Australia">Australia</option>
                <option value="France">France</option>
            </Select>
        </FormControl>
    </Flex>
    )
}

export default Country