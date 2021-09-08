import React,{useState} from 'react';
import {getEmployeeByEmail} from '../services/EmployeeData'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

   function Login(props) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState("");
      var handleChange = (e) =>{
         if(e.target.name === "email"){
            setEmail(e.target.value);
         }else if(e.target.name === "password"){
            setPassword(e.target.value);
         }
        
      }
      var func=(email,role)=>{
       let employee=getEmployeeByEmail(email)
       console.log(employee)
        if (employee!==null)
        {console.log("enter")
            console.log("role:",role)
            console.log("employee.role:",employee.role)
            console.log("name:",employee.name)
            console.log("password:",password)
            if (role===employee.role && employee.name===password){
                console.log("in func Admin")
                props.history.push('/Admin');
            }
            else if(role===employee.role && employee.name===password){
                console.log("in func employee")
                props.history.push('/Normal');
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
