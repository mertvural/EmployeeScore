const employeeState = []

const employeeReducer = (state = employeeState, action) => {
 
    switch (action.type) {
        
        case "GET_EMPLOYEE":
            return action.employee;  
        default:
            return state;
    }
}



export default employeeReducer;