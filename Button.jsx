import React from 'react'

export default function Button(props) {
  return (
    <div>
       <div className="col-12 pt-3">
              <button className="btn btn-primary float-right" type="submit">{props.name}</button> 
       </div>
    </div>
  )
}
