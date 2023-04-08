import React, { useEffect, useState } from "react";
import Button from "./Button";
import Search from "./Search";
import Page from "./Page";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

export default function Role() {
  const [isLoaded, setIsLoaded] = useState(false);
  const[value,setValue]=useState('');
  const [items, setItems] = useState([]);
  const [permission, setPermission] = useState([]);
  const [error, setError] = useState(false);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState();
  const [id, setID] = useState();
  const [isdelete, setdelete] = useState();
  const [modal, setModal] = useState(false);
  const showAddRoleModal = event => {
    setModal(true);
  };

  useEffect(() => {

    fetch("https://localhost:7227/api/permission/roles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhODhjNWVmLTliN2QtNDIzNy1hNjk3LTFlNTJkNTNiYzlkNiIsIm5iZiI6MTY2MzE1NzM2NywiZXhwIjoxNjYzMTU5NzY3LCJpYXQiOjE2NjMxNTczNjcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.wbzaZrtgTjnSu83m-VtiwE_QxqpPClplkCCTy1m9A6Y",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
          // console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, [isdelete]);


  useEffect(() => {

    fetch(`https://localhost:7227/api/permission/role/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhODhjNWVmLTliN2QtNDIzNy1hNjk3LTFlNTJkNTNiYzlkNiIsIm5iZiI6MTY2MzE1NzM2NywiZXhwIjoxNjYzMTU5NzY3LCJpYXQiOjE2NjMxNTczNjcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.wbzaZrtgTjnSu83m-VtiwE_QxqpPClplkCCTy1m9A6Y",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
          // console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, [isdelete]);




  useEffect(() => {
    // DELETE request using fetch with set headers
    //if(window.confirm("are you sure to delete")){
    const requestOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhODhjNWVmLTliN2QtNDIzNy1hNjk3LTFlNTJkNTNiYzlkNiIsIm5iZiI6MTY2MzE1NzM2NywiZXhwIjoxNjYzMTU5NzY3LCJpYXQiOjE2NjMxNTczNjcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.wbzaZrtgTjnSu83m-VtiwE_QxqpPClplkCCTy1m9A6Y',

      }
    };
    fetch(`https://localhost:7227/api/role/${id}`, requestOptions)
      .then(() => setStatus('Delete successful'), setdelete("hello"),

      );
  }, [{ id }]);


  function saveRole() {
    console.log(role);
    let data = { role }
    fetch("https://localhost:7227/api/role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhODhjNWVmLTliN2QtNDIzNy1hNjk3LTFlNTJkNTNiYzlkNiIsIm5iZiI6MTY2MzE1NzM2NywiZXhwIjoxNjYzMTU5NzY3LCJpYXQiOjE2NjMxNTczNjcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.wbzaZrtgTjnSu83m-VtiwE_QxqpPClplkCCTy1m9A6Y',
      },
      data: JSON.stringify(data)
    }).then((result) => {
      console.log(result);
    })
  }
  useEffect(() => {
    const postRole = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhODhjNWVmLTliN2QtNDIzNy1hNjk3LTFlNTJkNTNiYzlkNiIsIm5iZiI6MTY2MzE1NzM2NywiZXhwIjoxNjYzMTU5NzY3LCJpYXQiOjE2NjMxNTczNjcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.wbzaZrtgTjnSu83m-VtiwE_QxqpPClplkCCTy1m9A6Y',
      }
    }
    fetch("http://commommodulesapi.mindit.systems/api/role")
  })


  function ChangeStatus(event) {
    var check = event.target.value;
    if (check === 'true') {
      console.log('Change to false');
    }
    else if (check === 'false') {
      console.log('change to true');
    }
  }


  // function App() {
  //   const [value,setValue]=useState('');
  //   const handleSelect=(e)=>{
  //     console.log(e);
  //     setValue(e)
  //   }
  // } 


  return (
    <>
      <div>
        <Modal
          size='lg'
          isOpen={modal}
          toggle={() => setModal(!modal)}>
          <ModalHeader
            toggle={() => setModal(!modal)}>
            popup
          </ModalHeader>
          <ModalBody>
            <form>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor="role">Role</label>
                    <input type="text" className="form-control" name="role" onChange={(e) => { setRole(e.target.value) }} value={role} />
                  </div>
                </Col>
              </Row>
            </form>
            <button name="submit" onClick={saveRole}></button>
          </ModalBody>
        </Modal>

      </div>
      <div className="bg-light" id="body-pd">
        <div className="container-fluid">
          <div className="page-body-wrapper">
            <div className="row">
              <main className=" ms-sm-auto px-md-4">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb" className="pt-4">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Role
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-12">
                  <h5 className="mb-0">Roles and Permissions</h5>
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="px-3 bg-white elevation-5 p-4 pt-2 mt-3">
                      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                        <h2 className="h6">Roles</h2>
                        <button
                          name="Add"
                          className="btn btn-sm bg-secondary text-white"
                          type="button"
                          onClick={showAddRoleModal}

                        />
                        {/* <i className="fa fa-plus"></i> */}

                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table
                              className="table table-hover dataTable dtr-inline example2"
                              id="example2"
                              role="grid"
                            >
                              <thead>
                                <tr>
                                  <th scope="col">Role Name</th>
                                  <th scope="col">Status</th>
                                  <th width="10%" scope="col">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {items.map((item, i) => (

                                  <tr>
                                    <td>

                                      {item.roleType}

                                    </td>
                                    <th>

                                      <div class="form-check form-switch">
                                        {(item.isActive) ? <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onChange={ChangeStatus} value="true" /> : <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={ChangeStatus} value="false" />}
                                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                      </div>
                                    </th>
                                    <td className="text-centre py-0 align-middle">
                                      <a
                                        href="/"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Add/Edit"
                                      >
                                        <i className="fa fa-pencil text-secondary me-2"></i>
                                      </a>
                                      &nbsp;
                                      <a
                                        href="/"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteresult"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Delete"
                                        onClick={() => setID(item.roleID)}
                                      >
                                        <i
                                          className="fa fa-trash text-secondary"
                                          data-toggle="tooltip"
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <Page />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="px-3 bg-white elevation-5 p-4 pt-2 mt-3">
                      <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom permission-search">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-md-4">
                                <h2 className="h6">Permissions </h2>
                              </div>
                              {/* dropdown */}
                              <div className="col-md-4">
                              
                                <select name="selectList" id="selectList" value={value} onChange={(e)=>setValue(e.target.value)}>
                                {items.map((item, i) => (
                                  
                                  <option>{item.roleType}</option>
                                  )

                                  )}
                                   
                                </select>
                                
                               {console.log(value.roleID)}
                              </div>
                              <div className="col-md-4">
                                <div className="input-group float-right">
                                  <Search />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table
                              id="example3"
                              className="table table-hover dataTable dtr-inline example2"
                              role="grid"
                            >
                              <thead>
                                <tr>
                                  <th scope="col"> Module Name</th>
                                  <th scope="col" className="text-center">
                                    Create <br />
                                    <input
                                      type="checkbox"
                                      autoComplete="off"
                                    />
                                  </th>
                                  <th scope="col" className="text-center">

                                    Edit <br />
                                    <input type="checkbox" autoComplete="off" />
                                  </th>
                                  <th scope="col" className="text-center">

                                    Delete <br />
                                    <input type="checkbox" autoComplete="off" />
                                  </th>
                                  <th scope="col" className="text-center">

                                    View <br />
                                    <input type="checkbox" autoComplete="off" />
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="/">Module 1</a>
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="/">Module 2</a>
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="/">Module 3</a>
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="/">Module 4</a>
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                  <td className="text-center">
                                    <input type="checkbox" autoComplete="off" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <Page />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <Button name="save" />
            </div>
          </div>
        </div>




        <div className="modal fade" id="deleteresult" tabIndex="-1" aria-labelledby="deleteresultLabel" aria-hidden="true">
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
        </div>


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
      </div>
    </>
  );
}
