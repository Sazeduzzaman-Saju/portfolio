import React from "react";
import AllProjectForm from "./Form/AllProjectForm";

const AllProjects = () => {
  return (
    <div className="container relative">
      <div className="row">
        <div className="col-md-12 text-center wow fadeInUp">
          <h2>Projects</h2>
          <div className="space-border" />
        </div>
        <div className="col-md-12 wow fadeInUp">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <p className="p-0 m-0">Projects Table</p>
                <a
                  className="btn-main wow fadeInUp animated"
                  data-wow-delay=".6s"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal"
                  href="/allblogs"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  Add
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Modal Start */}
      <div>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade rounded-0"
          id="projectModal"
          tabIndex={-1}
          aria-labelledby="projectModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
           <AllProjectForm></AllProjectForm>
          </div>
        </div>
      </div>

      {/* Add Modal End */}
    </div>
  );
};

export default AllProjects;
