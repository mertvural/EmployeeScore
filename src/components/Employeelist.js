import React from 'react'
import { connect } from 'react-redux'
import Employee from './Employee'

const Employeelist = (props) => {

    return (
        <ul>
            {
            props.employee.map(employee => {
                return <Employee key={employee.id} {...employee} />
            })}
        </ul>
    )
}
const mapStateToProps = (state) => {

    return {
        employee: state.employee
    }
}


export default connect(mapStateToProps)(Employeelist);