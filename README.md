#React-Project 


Team Members - 
1. Srija
2. KondaReddy T
3. Vishnu Priya
4. Rahul


Create a new react project using following commands 

In terminal run following commands

     1.cd documents                           //create a folder in documents 
     
     2.mkir react-project
     
     3.cd react-project
     
     4.npm install -g yarn                     // installation
     
     5.npx create-react-app project
     
     6.cd project
     
     7.yarn  start                             //run
 
 
 Refer Readme of react file in this repository to download the template we are using through out our project
 
 For styling of buttons and also login page we have used material-UI you can install the dependency using following commands
 
 Open Terminal and navigate to the folder where you have installed the react project 
 
 Follow the below steps to install material-UI
     
     1.yarn add @material-ui/core 
                 or
       npm install @material-ui/core
     
     2.yarn add @material-ui/icons
                 or
       npm install @material-ui/icons
     
 check in your package.json to confirm the installation and also install all the packages mentioned in our package.json file which are necessary for various functionalities and features we have included in our project.
 
 Note: packages we refered here should do the work if you get any error regarding it you can browse the error and get the material-UI installation command in npm documentation pages
 
 
*******************************************************************************************************************************************************************


To connect our front-end project with backend we used graphql

To add graphql request: run the following command in your terminal inside your react folder

     yarn add graphql graphql-request
    
    
To create a database for this project and use it in react front-end mentioned here refer 

https://github.com/sundar-gopal/Backend-graphql 

follow the steps in Readme file in the above link to setup the database


*******************************************************************************************************************************************************************


After the database is created, in terminal, go to 'Backend-graphql' directory and run following two commands

    1.npm install
     
    2.nodemon
    
Express server would run our project on port 4000.

Then in another terminal window, go to project directory and run 'yarn start' command. The project runs on port 3000.
