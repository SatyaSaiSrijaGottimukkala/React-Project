import React,{useState} from 'react';
import {getEmployee,getEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql'
//import { getEmployeeByEmail } from '../services/EmployeeData1';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReactDOM from "react-dom";
import {EmployeeDetails,clearEmployeeDetails} from "../services/UserSession"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "../assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import EmployeeLayout from "layouts/Employee";
import AdminLayout from "layouts/Admin";

   function Login(props) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState("");
      const[employee,setemployee]=useState({})
      var handleChange = (e) =>{
         if(e.target.name === "email"){
            setEmail(e.target.value);
         }else if(e.target.name === "password"){
            setPassword(e.target.value);
         }
        
      }
      
    /*  var e=async()=>{
            console.log("email", email)
            const em=email
            let employee1= await getEmployeeByEmail(em)
            console.log("====>",employee1)

            setemployee(employee1[0])
            console.log("in e: employee: ",employee)
      }*/

      var func= async(email,role)=>{
         //await e()
         let employee1= await getEmployeeByEmail(email)
         setemployee(employee1[0])
         //var employee=getEmployeeByEmail(email)
         //console.log(employee)
        if (employee!==null)
        {console.log("enter")
            console.log("role:",role)
            console.log("employee.role:",employee.role)
            console.log("name:",employee.name)
            console.log("password:",password)
            if (role==="admin" && role===employee.role && employee.name===password){
               clearEmployeeDetails()
               EmployeeDetails(employee)
                console.log("in func Admin")
                ReactDOM.render(
                  <BrowserRouter>
                    <Switch>
                      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                      <Redirect from="/" to="/admin/Dashboard" />
                    </Switch>
                  </BrowserRouter>,
                  document.getElementById("root")
                );
            }
            else if(role==="normal"&& role===employee.role && employee.name===password){
               clearEmployeeDetails()
               EmployeeDetails(employee)
                console.log("in func employee")
                ReactDOM.render(
                  <BrowserRouter>
                    <Switch>
                      <Route path="/employee" render={(props) => <EmployeeLayout {...props} />} />
                   <Redirect from="/" to={"/employee/Employee-Profile"}/>
                      {/*<Redirect from="/" to={"/employee/user" }/>*/}
                    </Switch>
                  </BrowserRouter>,
                  document.getElementById("root")
                );
            }
            else{
                alert("password is wrong "+employee.name)
            }
        }
        else{
            alert("details are wrong")
        }}
      return (
         <div>
            <h2>Login</h2>
            <Form>
               <FormGroup>
               <Label for="exampleEmail">Email</Label>
               <Input type="email" name="email" id="exampleEmail"  onChange={handleChange} value={email}  placeholder="with a placeholder" />
               </FormGroup>
               <FormGroup>
               <Label for="examplePassword">Password</Label>
               <Input type="password" name="password" id="examplePassword"  onChange={handleChange}  value={password} placeholder="password placeholder" />
               </FormGroup>
               <Button color="primary" onClick={()=>{func(email,"admin")}}>Admin</Button>
            <Button color="primary" onClick={()=>{func(email,"normal")}}>Employee</Button>
            </Form>
         </div>
      );
   }
    export default Login;
    
