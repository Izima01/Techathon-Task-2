import { Box, Flex } from '@chakra-ui/react'
import './App.css'
import Leftbox from './Components/Leftbox'
import Background from '../images/bg-intro-desktop.png'
import Rightbox from './Components/Rightbox'
import Form from './Components/Form'

function App() {

  return (
    <Flex
      p={'8% 10% 5%'}
      as={'main'}
      width={'100%'} h={'100vh'}
      bgPos={'center'} bgImage={Background}
      bgColor={'hsla(0, 100%, 74%, 0.9)'}
      bgRepeat={'no-repeat'} bgSize={'cover'}
      gap={'50px'} align={'center'}
    >
      <Leftbox />
      <Rightbox>
        <Form />
      </Rightbox>
    </Flex>
  )
}

export default App
