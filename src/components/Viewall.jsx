import React, { useEffect, useState } from 'react'
import TodoNav from './TodoNav'
import axios from 'axios'

const Viewall = () => {
    const[todadata,changedata]=useState(
        {
          "todos" : []
}
    )
    const fetchData=()=>{
    axios.get("https://dummyjson.com/todos").then(
      (Response)=>{
        changedata(Response.data)
      }
    ).catch()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <TodoNav/>
<div className="container">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">todo</th>
     <th scope="col">completed</th>
     <th scope="col">userid</th>
      
    </tr>
  </thead>
  <tbody>
    {todadata.todos.map(
        (value,index)=>{
            return(
                <tr>
      <th scope="row">{value.id}</th>
      <td>{value.id}</td>
      <td>{value.todo}</td>
      <td>{value.completed}</td>
      <td>{value.userId}</td>
    </tr>
            )
        }
    )}
  </tbody>
</table>
        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall