import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import { getEmployeeDeails } from "../services/UserSession"
import jsPDF from "jspdf";
import 'jspdf-autotable'
import {
    Badge,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
 
  import Button from '@material-ui/core/Button';
  import {getEmployee,getEmployeeByID,getEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';


export default function CustomerAppF() {
    const [state, setState] = useState({
        par: [], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });
   
    const[salary,setsalary] = useState([]);
    const[sal,setsal] = useState([]);
    const[name,setname]=useState('');
    const params = useParams();
    useEffect(() => {
        reloadSal();
    },[]);

    const employee=getEmployeeDeails()
    console.log("employee:",employee);
    console.log(employee.id)
 

    
    let reloadSal =  async () => {
        let records =  await getSalaryByEmployeeId(employee.id);  
        console.log("records",records)
        setsalary(records)
        console.log("salary defined",salary);
        let records1 = await getEmployeeByID(employee.id);
        console.log("records1 is",records1);
        console.log("name is",records1[0].name);
        setname(records1[0].name); 
    }
  
     let generate_pdf = (item)=>{

      var doc = new jsPDF("p","pt","a4");
      
      doc.text(240,20,"Yara International")
      
      doc.text(260,40,"Salary-Slip")

      //doc.setFontStyle('bold')
      
      doc.autoTable({ html: '#my-table' })
      
      doc.autoTable({
      
      head: [['Fields', 'Data']],
      
      body: [
      
      ['Employee name',name],
      
      ['employee id',item.employeeId],
      
      ['Salary month-year',item.monthYear],
      
      ['Working daya in a month',item.workingDaysInMonth],
      
      ['Basic',item.basic],
      
      ['LTA',item.lta],
      
      ['HRA',item.hra],
      
      ['Variable',item.variable],
      
      ['Bonus',item.bonus],
      
      ['TDS',item.TDS],
      
      ['Tax',item.tax],
      
      ['Total',item.total],
      
      ],
      
      })
      
      doc.save("payslip.pdf")
      
      }


 
    
   

   
    return (
        <div>
            <CustomerList items={salary}
                generate_pdf={generate_pdf} 
                />
        </div>
    );
}
function CustomerList({ items,generate_pdf }) {
      return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">My Salary</Card.Title>
                <p className="card-category">
                  List of my Salary with all components 
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" class="table table-striped">
                <thead>
                    <tr>
              
                      <th className="border-0">Id</th>
                      <th className="border-0">Month Year</th>
                      <th className="border-0">Basic</th>
                      <th className="border-0">LTA</th>
                      <th className="border-0">Hra</th>
                      <th className="border-0">Variable</th>
                      <th className="border-0">bonus</th>
                      <th className="border-0">TAX</th>
                      <th className="border-0">Total</th>
                      <th className="border-0">Salary slip</th>
                     
                     
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.employeeId}>
                             <td>{item.employeeId}</td>
                             <td>{item.monthYear}</td>
                            <td>{item.basic}</td>
                            <td>{item.lta}</td>
                            <td>{item.hra}</td>
                            <td>{item.variable}</td>
                            <td>{item.bonus}</td>
                            <td>{item.tax}</td>
                            <td>{item.total}</td>
                            <td><Button variant="contained" color="primary" onClick={() => {generate_pdf(item)}}>Salaryslip</Button></td>

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
