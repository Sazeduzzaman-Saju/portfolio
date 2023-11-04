import toast from "react-hot-toast";
import ProjectFormAdd from "./Form/ProjectFormAdd";
import ProjectFormEdit from "./Form/ProjectFormEdit";
import { useQuery } from "@tanstack/react-query";
import './Dashboard.css'

const AllProjects = () => {
  const {
    data: projects,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/projects");
      return response.json();
    },
    refetchInterval: 1000, // Auto refetch every 60 seconds (adjust the interval as needed)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }
  const handleRemove = (project) => {
    fetch(`http://localhost:5000/projects/${project._id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Reported Post Deleted");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
                  data-bs-target="#projectModalAdd"
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
                      <th scope="col" width={"5%"}>
                        #
                      </th>
                      <th scope="col" width={"15%"}>
                        Image
                      </th>
                      <th scope="col" width={"20%"}>
                        Project Title
                      </th>
                      <th scope="col" width={"20%"}>
                        Live Link
                      </th>
                      <th scope="col" width={"15%"}>
                        Ripo Link
                      </th>
                      <th scope="col" width={"20%"} className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr key={project._id}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img
                            className="rounded-circle shadow-lg"
                            width={"50px"}
                            src={project.projectImage}
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="text-muted">
                            {project.project_title}
                          </span>
                        </td>
                        <td>
                          <a
                            href={project.project_live_link}
                            target="_blank"
                            className="text-white  bg-primary badge badge-sm  "
                            rel="noreferrer"
                          >
                            Git Repository Link
                          </a>
                        </td>
                        <td>
                          <a
                            href={project.project_live_link}
                            target="_blank"
                            className="text-white  bg-primary badge badge-sm  "
                            rel="noreferrer"
                          >
                            Git Repository Link
                          </a>
                        </td>
                        <th scope="row">
                          <div className="d-flex justify-content-center align-items-center">
                            <a
                              href="javascript:void();"
                              className="text-muted me-3 action_icon_color table_action_btn"
                              data-wow-delay=".6s"
                              data-bs-toggle="modal"
                              data-bs-target="#projectModalEdit"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.6s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </a>
                            <a
                              href="javascript:void();"
                              onClick={() => handleRemove(project)}
                              className="text-muted action_icon_color table_action_btn"
                              data-wow-delay=".6s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.6s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <i className="fa-solid fa-dumpster"></i>
                            </a>
                          </div>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add edit Modal Start */}
      {/* Add Start */}
      <div>
        {/* Project Add Modal */}
        <div
          className="modal fade rounded-0"
          id="projectModalAdd"
          tabIndex={-1}
          aria-labelledby="projectModalAddLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
            <ProjectFormAdd></ProjectFormAdd>
          </div>
        </div>
      </div>
      {/* Edit Start */}
      <div>
        {/* Project Add Modal */}
        <div
          className="modal fade rounded-0"
          id="projectModalEdit"
          tabIndex={-1}
          aria-labelledby="projectModalEditLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
            <ProjectFormEdit></ProjectFormEdit>
          </div>
        </div>
      </div>
      {/* Add edit Modal End */}
    </div>
  );
};

export default AllProjects;
