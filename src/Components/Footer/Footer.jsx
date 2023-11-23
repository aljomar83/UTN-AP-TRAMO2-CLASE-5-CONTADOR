import React from 'react';
// import './Footer.css'; 

import { Box, ChakraProvider, Container, Icon, Link , Text} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram , FaCopyright} from "react-icons/fa6";


const Footer=()=>{

    return(				
        <Container as='footer' h="8vh" maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'rgb(21, 168, 50)'}
            alignItems={'center'} fontSize={{base:'8',sm:'12',md:'18'}}>
                <Box color={'whitesmoke'}>{<strong><FaCopyright /> Acá va  - <Link _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}> Tu nombre o empresa Pana </Link> - 2023 </strong>}</Box>
                <Box display="flex" flexDirection="row" justifyContent={'space-around'} 
                alignItems={'center'}>
                    <Link p='2' color={'whitesmoke'}  _hover={{color: 'blue'}}><FaFacebookF/></Link> 
                    <Link p='2' color={'whitesmoke'}  _hover={{color: 'red'}}><FaInstagram/></Link>
                    </Box>  
        </Container> 
    );   

}

export {Footer};