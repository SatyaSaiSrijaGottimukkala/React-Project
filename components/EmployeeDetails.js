import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import {getCustomers,getCustomerById,deleteCustomer,updateCustomer, addCustomer} from '../services/CustomerData';
import {useHistory} from 'react-router'

export function CustomeErAppF(){
  const [state,setState] = useState({ 
    items: [], name: '',email:'',address:'',phone:'',id:0,bLabel:'Add' });
    const history = useHistory();
  useEffect(()=>{
    reloadCustomer();
  },[])
  let reloadCustomer = async () =>{
    let customers = await getCustomers();
    console.log("Customers>>>>"+customers);
    setState({...state, items:customers});
  }

  let doEdit = (id) =>{
    history.push("/employee/edit/"+id);
  }
    return (
      <div>
         <Menu/>
        <h3>Employee Details</h3>
        <EmployeeList items={state.items}
          editCustomer={doEdit} />
      </div>
    ); 
}
 function EmployeeList ({items,editCustomer,delCustomer}){
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th scope="row">id</th>
                        <th scope="row">Name</th>
                        <th scope="row">Email</th>
                        <th scope="row">Address</th>
                        <th scope="row">Date of Birth</th>
                        <th scope="row">Date of Joining</th>
                        <th scope="row">Education</th>
                        <th scope="row">Type</th>
                        <th scope="row">Role</th>
                        <th scope="row">Password</th>
                        <th colSpan={1}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.dateOfJoining}</td>
                    <td>{item.education}</td>
                    <td>{item.type}</td>
                    <td>{item.role}</td>
                    <td>{item.password}</td>
                    <td><Button variant="outline-secondary" onClick={()=>{editCustomer(item.id)}}>Edit</Button></td>
                </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}
