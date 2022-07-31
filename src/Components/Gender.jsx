import { Flex, FormControl, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'

const Gender = ({onChange}) => {
    // const [gender, setGender] = useState();

    // const handleChange=(event)=> {
    //     setGender(event.target.value);
    // }
    // console.log(gender);

    // sessionStorage.setItem('gender', gender)


    return (
    <FormControl w={'100%'} m={'0 0 20px'}>
        <FormLabel mb={'5px'}>Gender</FormLabel>
        <Flex gap={'30px'}>
            <div>
                <input type={'radio'} name="gender" value='male' onChange={onChange}/>Male
            </div>
            <div>
                <input type={'radio'} name="gender" value='female' onChange={onChange}/>Female
            </div>
            <div>
                <input type={'radio'} name="gender" value='others' onChange={onChange}/>Others
            </div>
        </Flex>
    </FormControl>
    )
}

export default Gender