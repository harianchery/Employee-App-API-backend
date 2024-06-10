import React, { useState } from 'react'

const ViewAll = () => {
    const [emp, changeEmp] = useState(
        [
            {"name":"Rad",
            "id": "iyuui",
            "des":"fg",
            "cname":"jiil"}
    ]
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Employee id</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Company Name</th>
                                </tr>
                            </thead>
                            {
                                emp.map(
                                    (value,index)=>{
                                        return <tbody>
                                        <tr>
                                            <td scope="row">{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.des}</td>
                                            <td>{value.cname}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll