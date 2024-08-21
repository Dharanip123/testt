module.exports = cds.service.impl( async function(){
 
    //Step 1: get the object of our odata entities
    const { EmployeeSet} = this.entities;

    this.before('CREATE', EmployeeSet, (req) => {
        var salary = parseInt(req.data.salaryAmount);
        var currencycode = req.data.Currency_code
        if(salary > 50000){
            req.error("Employees salary must be less than 50000 USD");
            console.log("Employees salary must be less than 50000 USD");
        }
    });
    
    // this.before ('UPDATE', EmployeeSet, async (req) => { if ('nameFirst' in req.data) {
    //     req.error("Operation not allowed");
       
    // }})
    // this.before ('UPDATE', EmployeeSet, async (req) => { if ('loginName' in req.data) {
    //     req.error("Operation not allowed");
       
    // }})
 
    // this.on('CREATE' , EmployeeSet, (req) => {
    //     console.log("Create operation successfull")
    // })
 
    // this.on('DELETE' , EmployeeSet, (req) => {
    //     console.log("Delete operation successfull")
    // })
 
    // this.on('UPDATE' , EmployeeSet, (req) => {
    //     console.log("Delete operation successfull")
    // })
 
}
);