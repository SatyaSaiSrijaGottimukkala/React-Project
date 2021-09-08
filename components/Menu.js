import React from 'react';
import Button from "react-bootstrap/Button"
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
   function Menu() {
    const history = useHistory();
      return (
          <div>
              {/* this is commect*/}
          <h2>Employee Data</h2>
          <Button variant="info" onClick={()=>{
            history.push("/dashboard");
        }}>Dashboard</Button>&nbsp;|&nbsp; 
          <Button variant="info" onClick={()=>{
            history.push("/profile");
        }}>Profile</Button>&nbsp;|&nbsp; 
          <Button variant="info" onClick={()=>{
            history.push("/salary");
        }}>Salary</Button>&nbsp;|&nbsp; 
          <Button variant="info" onClick={()=>{
            history.push("/leaves");
        }}>Leaves</Button>&nbsp;|&nbsp; 
          <Button variant="info" onClick={()=>{
            history.push("/attendance");
        }}>Attendance</Button>
           <hr />
          </div>
      );
   }
    export default Menu;
