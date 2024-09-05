import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
const StadiumList = ({ stadiums, onEdit, onDelete }) => {
  return (
    <div>
       <h2>Liste des stades</h2>
<Table variant='simple' size='sm'> 
    <Thead>
      <Tr>
       
        <Th>nom</Th>
        <Th>Emplacement</Th>
        <Th>Action</Th>
   </Tr>
 </Thead>
 <Tbody>
 {stadiums.map((stadium) => (
  <Tr key={stadium.id}>
  <Td>{stadium.name}</Td>
  <Td>{stadium.location}</Td>
  <Td>
  <Button onClick={() => onEdit(stadium)} style={{ marginRight: '8px' }}><BiPencil /></Button>
  <Button onClick={() => onDelete(stadium.id)}><RiDeleteBin6Line /></Button>
  </Td>
  </Tr>
 ))}
 </Tbody>
 </Table>   
    
     
      
    </div>
  );
};

export default StadiumList;
