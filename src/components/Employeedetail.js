import React from 'react'
import {connect} from 'react-redux';
import EmployeeItem from './EmployeeItem';




const Employeedetail = (props) => {
    return (
       <EmployeeItem {...props.employee} />
    )
}

const mapStatetoProps = (state, props) => {
    return {
        employee: state.employee.find((employee) => {
            return employee.id === props.match.params.id
        })
    }
}





export default connect(mapStatetoProps)(Employeedetail);
