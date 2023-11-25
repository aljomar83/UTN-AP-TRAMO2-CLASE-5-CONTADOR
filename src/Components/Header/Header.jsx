import React from 'react';
// import './Header.css'; 

import { Box, Link, Heading, textDecoration , Container, Icon } from "@chakra-ui/react";
import { UpDownIcon } from '@chakra-ui/icons'
 

const Header=()=>{

    return(				
        <Container as='header' h={{base:'10vh',md:'14vh'}} maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'black'} alignItems={'center'}>
                <Box display="flex"  flexDirection="row" alignItems={'center'} justifyContent={"space-around"} 
                ><Heading as='h1' fontFamily={'Rockwell'}  fontWeight={500} fontSize={{base:'16',sm:'20',md:'36'}} textColor={'white'}><Link  _hover={{color:'pink', textDecoration:'none'}}> Contador Responsive </Link></Heading></Box>
                
        </Container>
    );   

}

export {Header};