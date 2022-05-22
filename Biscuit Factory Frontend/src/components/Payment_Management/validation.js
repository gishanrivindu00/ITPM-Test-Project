
const validation = (values) => {

    let errors = {};

    if (!values.clas) {
        errors.clas = "Class is required."
    } else if (values.clas>3) {
        errors.clas = "Class must be less than or equal to 3"
    }

    if (!values.name) {
        errors.name = "Name is required."
    }

    if (!values.basicPay) {
        errors.basicPay = "Basic Pay is required."
    } else if (values.basicPay.length>8) {
        errors.basicPay = "You can't enter more than eight characters"
    }
    if (!values.travelAllowance) {
        errors.travelAllowance = "Travel Allowance is required."
    } else if (values.travelAllowance.length>8) {
        errors.travelAllowance = "You can't enter more than eight characters"
    }
    if (!values.otAllowance) {
        errors.otAllowance = "OT Allowance is required."
    } else if (values.otAllowance.length>8) {
        errors.otAllowance = "You can't enter more than eight characters"
    }
    if (!values.bankAccountNo) {
        errors.bankAccountNo = "Account Number is required."
    } else if (values.bankAccountNo.length>8) {
        errors.bankAccountNo = "You can't enter more than eight characters"
    }
    if (!values.totalSalary) {
        errors.totalSalary = "Total Salary is required."
    } else if (values.totalSalary.length>8) {
        errors.totalSalary = "You can't enter more than eight characters"
    }
    return errors;
}


export default validation;