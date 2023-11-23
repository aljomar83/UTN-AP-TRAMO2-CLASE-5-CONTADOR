import { Box, Button, Container, Divider, Grid, GridItem, Text } from '@chakra-ui/react';
import {React ,   useState } from 'react';
// import './ContadorResponsive.css';
import { animate, motion , useSpring } from "framer-motion"
import { FaMinusSquare, FaPlusSquare, FaTrash} from "react-icons/fa";

const ContadorResponsive=()=>{

    const [contador, setContador] = useState(0);
    

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        if(contador>0){
            setContador(contador - 1);       
        }
    }
    
    const borrar = () => {
        setContador(0);
    }
    
    
    return(				
        <Container display={'flex'} flexDirection={'column'} alignItems={"center"} variant='elevated'
            maxH={'700'} minH={'500'} maxW={{base:'300' ,md:'350'}}>
            <Container display={'flex'} flexDirection={'column'} alignItems={"center"} fontFamily={'Roboto, sans-serif'} minH={'100'}>
            <motion.div className="box">
                <Text fontSize={{base:'150', sm:'160', md:'200'}} >{contador}</Text></motion.div>
                <Text fontSize={{base:'28', sm:'30', md:'36'}}> Número </Text>
            </Container>
            <Container  minH={{base:'300px', sm:'100px'}} mt={{base:'10px', md:'20px'}}>
                <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)'}} rowGap={4} gap={4}>
                    <GridItem colSpan={1}>  
                    <motion.div className="box" whileTap={{scale: 1.2}} whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} >  
                        <Button  w={'full'} onClick={restar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} 
                        outlineColor={'black'} color={'red'} _hover={{bg:'pink', color:'black'}} isDisabled={contador <= 0}><FaMinusSquare  /></Button>
                        </motion.div></GridItem>
                    <GridItem colSpan={{base:2 ,md:1}} order={{base:2 ,md:1}}>
                    <motion.div className="box" whileTap={{scale: 1.2}} whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} >     
                        <Button w={'full'}  onClick={borrar} padding={'10px 25px'} borderRadius={'10px'} 
                        bg={'white'} outlineOffset={'2'} outlineColor={'black'} color={'gray'} _hover={{bg:'rgb(184, 184, 184)', color:'black'}} isDisabled={contador <= 0}><FaTrash/></Button>
                        </motion.div></GridItem>
                    <GridItem colSpan={1} order={{base:1 ,md:2}}>    
                    <motion.div className="box" whileTap={{scale: 1.2}} whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} >
                        <Button w={'full'}  onClick={sumar} padding={'10px 25px'} borderRadius={'10px'} bg={'white'} outlineOffset={'2'} outlineColor={'black'} color={'green'} _hover={{bg:'pink', color:'black'}}><FaPlusSquare/></Button>
                        </motion.div></GridItem>
                </Grid>  
            </Container>
            

        </Container> 
    );   

}

export {ContadorResponsive};