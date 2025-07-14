import React from 'react'
import TodoNav from './TodoNav'

const DeleteT = () => {
  return (
    <div>
        <TodoNav/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">enter the course to delete: </label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-dark">submit</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default DeleteT