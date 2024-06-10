import React, { useState } from 'react'

const SearchEmp = () => {
    const[emp,changeEmp]=useState(
        {
            "id":""
        }

    )
    const InputHandler=(event)=>{
        changeEmp({...emp,[event.target.name]:event.target.value})

    }
    const  readValue=()=>{{
        console.log(emp)}
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Employee Id</label>
                        <input type="text" className="form-control"name='id' value={emp.id} onChange={InputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary"onClick={readValue} >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchEmp