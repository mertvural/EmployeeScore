import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeItem = ({firstName, lastName, email, address, phone, description, avatar }) => {
    return (
        <>
        <Link className="btn float-right" to= {"/"}>Geri Dön</Link>
            <div className="detail-form">
                <div className="svgContainer">
                    <div>
                    <img src={"/"+avatar} />
                    </div>
                </div>  
                <div className="inputGroup inputGroup1">
                    <label>Name Surname</label>
                    {firstName} {lastName}
                </div>
                <div className="inputGroup inputGroup1">
                    <label>Email</label>
                    {email}
                </div>
                <div className="inputGroup inputGroup2">
                    <label>Password</label>
                    {phone}
                </div>
                <div className="inputGroup inputGroup3">
                    <label>address</label>
                    {address}
                </div>
                <div className="inputGroup inputGroup3">
                    <label>description</label>
                    {description}
                </div>
            </div>
        </>
    )
}

export default EmployeeItem
