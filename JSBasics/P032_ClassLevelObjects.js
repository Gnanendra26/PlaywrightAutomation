/*
Program 4: Employee Class
Problem Statement:
Create an Employee class with name, salary, and
department. Create a method that calculates a 10% bonus and
displays the total salary.

*/

class Employee
 {
    name;                                       //without global varibleo we can run
    salary;
    department; 

    constructor(name,salary,department)  // direclty we can add here paramenter what we required.automatically globally it will create
    {
        this.name=name;
        this.salary=salary;
        this.department=department;
    }
    getDetails()
    {
     console.log("EmployeeName is :"+this.name,"\nEmployee Salary:",+this.salary,"\nEmployee Department:",this.department);
    }
    calculateBonus()
    {

       let bonus=this.salary*10/100;
       console.log("Total Bonus:",bonus);
    }
}
let Emp=new Employee("Gnanendra",50000,"SDE"); // we can increase the passing of parameter details no problem
Emp.getDetails();
Emp.calculateBonus();

console.log("\n********************Student Class*Assignment**********************************");


class student
{
    name;
    age;
    course;
    constructor (name,age,course)
    {
        this.name=name;
        this.age=age;
        this.course=course;
    }
    getDetails()
    {
        console.log("Student_Name:"+this.name,"\nStudent_Age:"+this.age,"\nStudent_Course:"+this.course);
    }
}
let students=new student("Narendra Modi","73","Politics");
console.log(students);
students.getDetails();

console.log("\n*********BankAccount class*************************");

class BankAccount
{
    accountHolder;
    balance;
    // deposit;
    // withdraw;
    // checkBalance;
    constructor(accountHolder,balance)
    {
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
     deposit(amount)
    {
        console.log("\nDeposited Amount is:"+amount);
        this.balance= this.balance + amount;
       console.log("The Bank Balance is:",this.balance);
    }
    withdraw(amt)
    {
        console.log("\nWithdrawal amount is:"+amt);
        this.balance=this.balance-amt;

        if(amt>this.balance)
        {
            console.log("Insufficent Funds");
        }   
    }
     checkBalance()
     {
        console.log("\nThe Account Holder:"+this.accountHolder);
        console.log("\nThe the Current Bank Balance:"+this.balance);
     }
}
let account=new BankAccount("Gnanendra",50000);
console.log(account);
account.deposit(2000);
account.withdraw(55000);


