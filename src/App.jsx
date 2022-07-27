import {Flex } from '@chakra-ui/react'
import './App.css'
import Leftbox from './Components/Leftbox'
import Background from '../images/bg-intro-desktop.png'
import BackgroundMobile from '../images/bg-intro-mobile.png'
import Rightbox from './Components/Rightbox'
import Form from './Components/Form'

function App() {

  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      p={['20% 6% 5%', '10% 6% 0', '0% 5%', null, '6% 10% 4%']}
      as={'main'}
      maxW={'100%'} minH={'100vh'}
      bgPos={'center'} bgImage={[BackgroundMobile, BackgroundMobile, Background]}
      bgColor={'hsla(0, 100%, 74%, 0.9)'}
      bgRepeat={'no-repeat'} bgSize={'cover'}
      gap={['50px', '50px', '20px']} align={'center'}
    >
      <Leftbox />
      <Rightbox>
        <Form />
      </Rightbox>
    </Flex>
  )
}

export default App
