import React from 'react'

export default function Search() {
  return (
     <>
      <input type="text" className="Form-control" placeholder="Search module.." aria-label="Username" aria-describedby="basic-addon1"/>
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                            </div>
    </>
  )
}
