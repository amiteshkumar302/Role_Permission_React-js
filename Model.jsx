import React, { useState } from 'react'

export default function Modals() {
 
  return (
    <>
    debugger;
    {/* <div className="modal fade" id="deleteresult" tabIndex="-1" aria-labelledby="deleteresultLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteresultLabel">Delete User</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-5">
                  Are you sure you want to delete this user?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  <button type="button" className="btn btn-primary">Yes</button>
                </div>
              </div>
            </div>
          </div> */}


          <div className="modal fade" id="addrole" tabIndex="-1" aria-labelledby="addroleLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title" id="addroleLabel">Add Role</h6>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-5">
                  <div className="row">
                    <div className="col-12">
                      <form className="row g-3 needs-validation" >
                        <div className="col-md-12">
                          <label htmlFor="" className="Form-label">Name</label>
                          <input type="text" className="Form-control" id="validationCustom01" value="" required placeholder="" />
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
          </>
  )
}
