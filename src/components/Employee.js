
import { Link } from 'react-router-dom'
import configureStore from '../store/configureStore';
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import toastr from 'toastr'
const store = configureStore();
function employeListItem(props) {

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

    const [count, setCount] = useState(0);

    count>0 ? toastr.success('Oy kullanıldı teşekkürler.') : ""
    
    return (
        <li className="list" style={{order: -count}}>
            <figure>
                <img src={props.avatar} />
            </figure>
            <h3>
                {props.firstName} {props.lastName} 
            </h3>
            <p>
            {props.job}
            </p>
            <button className="btn" onClick={() => setCount(count + 1)}>Oy Ver</button>
            <Link className="detail" to= {`/employee/${props.id}`}>Detay</Link>
            <span className="badge">
                Toplam Oy : {count}
            </span>
        </li>
    )
}


const mapStateToProps = (state) => {
    return {
        employee: state.employee
    }
}

export default connect(mapStateToProps)(employeListItem);