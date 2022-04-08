const employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber) {
        super('${manager_name}')
        console.log(manager_name)
        this.officeNumber = officeNumber
    }
}

getRole()