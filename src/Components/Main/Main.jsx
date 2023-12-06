import React from 'react';
import { Container } from '@chakra-ui/react';
import { ContadorResponsive } from '../ContadorResponsive/ContadorResponsive';
// import './Main.css'; 

const Main=()=>{

    return(				
        <Container  bgImage="url('public/inter.jpg')" bgRepeat={'no-repeat'} bgPosition={'center'} bgOpacity={'0.5'} minH="78vh" maxW="100vw" display={'flex'} flexDirection={'column'} alignItems={'center'} 
        justifyContent={'center'}  > 

            <ContadorResponsive/>

    </Container> 
    );   

}
 
export {Main};