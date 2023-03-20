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
  import {Link} from "react-router-dom"


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
      <MenuItem>Home</MenuItem>
      <MenuItem>Informatica</MenuItem>
      <MenuItem>Musica</MenuItem>
    </MenuList>
  </Menu>  
    <Spacer />
    <Box p='10'/>
    <Link to= {"/cart"}>
    <CartWidget/>
    </Link>
  </Flex>
    </Box>
  </>
   )
}








    

    
 

export default NavBar