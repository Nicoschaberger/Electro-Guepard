import { useContext } from 'react'
import Form from './Form'
import { CartContext } from '../context/ShoppingCartProvider'
import { Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Center,
  TableContainer, } from '@chakra-ui/react'


const Cart = () => {

  const{ cart, removeFromCart, cartPriceTotal, clearCart, cartPrice } = useContext(CartContext)

return (
  <>
    {cart.length === 0 ? <p className='vacioCarro'>Tu carrito esta vacio!</p>
    :<>
      {cart.map((item)=>{
        return(
        <div key={item.id}>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th>Producto</Th>
                  <Th>Precio</Th>
                  <Th isNumeric>Cantidad</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{item.nombre}</Td>
                  <Td>${item.precio}</Td>
                  <Td isNumeric>{item.counter}</Td>
                  <Td><strong>Total:</strong></Td>
                  <Td><strong>${item.precio * item.counter}</strong></Td>
                  <Td></Td>
                  <Button variant="outline-danger" onClick={() => removeFromCart (item.id)} >X</Button>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        )
      })}
    </>}
    <TableContainer>
      <Table>
      <Tbody>
                <Tr>
                  <Td><strong>Total carrito </strong></Td>
                  <Td isNumeric> <strong> ${cartPriceTotal()} </strong></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
      </Table>
    </TableContainer>
        <Center>
          
          <Button variant="outline-danger" onClick={() => clearCart()} >Comprar</Button>
          <Button variant="outline-danger" onClick={() => clearCart()} >Vaciar Carrito</Button>
          <Button variant="outline-primary" size="lg">Volver al Catalogo</Button>
        </Center>
      <Form/>
  </>
  )
}

export default Cart