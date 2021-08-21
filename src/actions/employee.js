
const axios = require('axios');
import avatar from '../images/user.png'

let employeArray = [];

export const getEmployee = (employee) => ({
  type: "GET_EMPLOYEE",
  employee
})


export const getEmployeeDatabase = () => {

  return (dispatch) => {

    const query = `{
        posts {
          id
          firstName
          lastName
          job
          email
          address
          phone
          description
        }
      }`
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return axios.post('http://localhost:9002/graphql', {
      query,
      headers
    })
      .then(function (response) {

        let datas = response.data.data.posts;         
      
        datas.forEach((el) => {

          employeArray.push({
            ...el,
            avatar : avatar,
            score : 0
          })
        })
    
        dispatch(getEmployee(employeArray));

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// export const editScore = (id) => ({
//   type: "EDIT_SCORE",
//   id,
//   employeArray
// })

