import React, { useEffect, useState } from 'react';
import {getEmployee,getEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql'
import { useHistory, useParams } from 'react-router-dom'
import { getEmployeeDeails } from "../services/UserSession";
import { Link } from 'react-router-dom'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function LeaveList() {
    const [records,setRecords]=useState([])
 
    const employee=getEmployeeDeails()
    useEffect(() => {
        const id =employee.id ;
        reloadCustomer(id);
    },[]);
    
    let reloadCustomer = async (id) => {
       let recordsss = await getLeavesByEmployeeId(id); 
            setRecords(recordsss)}
  
    return (
        <div>
            <CustomerList items={records}
                />
        </div>
    );

  }
function CustomerList({ items}) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">My Leaves</Card.Title>
                <p className="card-category">
                List of my leaves
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" class="table table-striped">
                <thead>
                    <tr>
              
                      <th className="border-0">ID</th>
                      <th className="border-0">EmployeeId</th>
                      <th className="border-0">StartDate</th>
                      <th className="border-0">EndDate</th>
                      <th className="border-0">Count</th>
                      <th className="border-0">Year</th>
                      
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.count}</td>
                            <td>{item.year}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default LeaveList;
