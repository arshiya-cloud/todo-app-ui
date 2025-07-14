import React from 'react'
import TodoNav from './TodoNav'

const AddTodo = () => {
  return (
    <div>
<TodoNav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl 12">
            <div className="row g-3">
                <div className="col">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">user id</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">id</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">title</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                        <label htmlFor="" className="form-label">did you complete it </label>





<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
  <label class="form-check-label" for="checkDefault">
    yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked/>
  <label class="form-check-label" for="checkChecked">
    no
  </label>
</div>



                        

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                       <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddTodo