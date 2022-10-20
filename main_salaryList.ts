import {SalaryList} from "./salaryList";

let salaryList = new SalaryList()
salaryList.insertFirst(1,12000000);
salaryList.insertFirst(2,13000000);
salaryList.insertFirst(3,14000000);
salaryList.insertFirst(4,11000000);
console.log(salaryList.showList())
console.log(salaryList.totalSalary())
console.log(salaryList.highestSalary())