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
    <Link to={"/"}>
    <img className="logo" src="../img/3.png" alt="logo" />
    </Link>
    <Spacer />
    <Box  p='1'/>
    <Menu>
    <MenuButton as={Button} className="main">
      Categorias
    </MenuButton>
    <MenuList>
      <Link to={`/categoria/${"Cocina"}`}>
        <MenuItem>Cocina</MenuItem>
      </Link>
      <Link to={`/categoria/${"Televisores"}`}>
        <MenuItem>Televisores</MenuItem>
      </Link>
      <Link to={`/categoria/${"Home"}`}>
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to={`/categoria/${"Informatica"}`}>
        <MenuItem>Informatica</MenuItem>
      </Link>
      <Link to={`/categoria/${"Musica"}`}>
        <MenuItem>Musica</MenuItem>
      </Link>
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