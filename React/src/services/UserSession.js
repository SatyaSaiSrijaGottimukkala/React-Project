var EmployeeRecord={}

var token = ""

var saveLocalStorage = () =>{
    localStorage.setItem('EmployeeRecord',JSON.stringify(EmployeeRecord));
}
export var EmployeeDetails = (record)=>{
    EmployeeRecord=record;
    saveLocalStorage();
}
/*
export const clearEmployeeDetails=()=>{
    EmployeeRecord=[];
    saveLocalStorage()
}
*/
export var UpdateDetails =(record)=>{

   // clearEmployeeDetails()
    
    EmployeeRecord=record;
    
    saveLocalStorage();
    
    }

export const getEmployeeDeails=()=>{
    let Employee=localStorage.getItem("EmployeeRecord");
    console.log(JSON.parse(Employee))
    return JSON.parse(Employee)
    
}

export var TokenStore = (tokenGen) =>{
    token = tokenGen
    console.log("INSIDE USER SESSION "+token)
    }
    
export var useToken = () => {
        console.log("RETURNING TOKEN " + token)
        token=token.replace(/^"(.*)"$/,'$1');
        return token;
}
