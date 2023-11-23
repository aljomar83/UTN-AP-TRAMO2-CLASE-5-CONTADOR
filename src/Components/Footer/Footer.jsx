import React from 'react';
// import './Footer.css'; 

import { Box, ChakraProvider, Container, Icon, Link , Text} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram , FaCopyright} from "react-icons/fa6";


const Footer=()=>{

    return(				
        <Container as='footer' h="8vh" maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'black'}
            alignItems={'center'} fontSize={{base:'8',sm:'12',md:'18'}}>
                <Box color={'whitesmoke'}fontFamily={'Rockwell'} display="flex" flexDirection="row" gap={2} alignItems="center"><FaCopyright /> Derechos Reservados - <Link _hover={{color:'pink', textDecoration:'none'}}> A. M. Proyectos e Inversiones </Link> - 2023 </Box>
        </Container> 
    );   

}

export {Footer};