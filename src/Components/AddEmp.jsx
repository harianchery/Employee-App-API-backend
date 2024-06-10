import React, { useState } from 'react'

const AddEmp = () => {
    const[emp,changeEmp]=useState(
        {
            "name":"",
            "id":"",
            "des":"",
            "cname":""
        }
    )
    const InputHandler=(event)=>{
        changeEmp({...emp,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(emp)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Employee Name</label>
                            <input type="text" className="form-control"name='name' value={emp.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Employee id</label>
                            <input type="text" className="form-control" name='id' value={emp.id} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Designation</label>
                            <input type="text" className="form-control" name='des' value={emp.des} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Company Name</label>
                            <input type="text" className="form-control"  name='cname' value={emp.cname} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add New Employee</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmp