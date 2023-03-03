import CartWidget from "./CartWidget"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box,
    Spacer,
  } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <>
    <Box p='6'>  
  <Flex>
    <Box />
    <img id="logo" src="./img/3.png" alt="logo" />
    <Spacer />
    <Box  p='1'/>
    <Menu>
    <MenuButton as={Button}>
      Categorias
    </MenuButton>
    <MenuList>
      <MenuItem>Cocina</MenuItem>
      <MenuItem>Televisores</MenuItem>
      <MenuItem>Hogar</MenuItem>
      <MenuItem>Informatica</MenuItem>
      <MenuItem>Musica</MenuItem>
    </MenuList>
  </Menu>  
    <Spacer />
    <Box p='10'/>
    <CartWidget/>
  </Flex>
    </Box>
  </>
   )
}

{/* <Flex>
  <Box>
   
    </>
  </Box>
  <Spacer />
  <Box p='4'>
  
  </Box>
  <Spacer />
  <Box p='4'>
    
  </Box>
</Flex> */}







    

    
 

export default NavBar