import EducationAdd from "./Form/EducationAdd";
import EducationEdit from "./Form/EducationEdit";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllEducation = () => {
  const {
    data: educations,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["educations"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/educations");
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
  const handleRemove = (education) => {
    console.log(education)
    fetch(`http://localhost:5000/educations/${education._id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("educations Post Deleted");
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
          <h2>Edducation</h2>
          <div className="space-border" />
        </div>
        <div className="col-md-12 wow fadeInUp">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <p className="p-0 m-0">Education Table</p>
                <a
                  className="btn-main wow fadeInUp animated"
                  data-wow-delay=".6s"
                  data-bs-toggle="modal"
                  data-bs-target="#EducationAdd"
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
                      <th scope="col" width={"35%"}>
                        Institute
                      </th>
                      <th scope="col" width={"20%"}>
                        Subject
                      </th>
                      <th scope="col" width={"20%"}>
                        Start Date
                      </th>
                      <th scope="col" width={"20%"}>
                        End Date
                      </th>

                      <th scope="col" width={"15%"}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {educations.map((education, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{education.institute_name}</td>
                        <td>
                          <span className="text-muted">
                            {education.subject}
                          </span>
                        </td>
                        <td>
                          <span className="text-info">
                            {education.start_date}
                          </span>
                        </td>
                        <td>
                          <span className="text-info">{education.end_date}</span>
                        </td>
                        <th scope="row">
                          <div className="">
                            <a
                              href="javascript:void();"
                              className="text-muted me-3 action_icon_color"
                              data-wow-delay=".6s"
                              data-bs-toggle="modal"
                              data-bs-target="#EducationEdit"
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
                              onClick={() => handleRemove(education)}
                              className="text-muted action_icon_color"
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
          id="EducationAdd"
          tabIndex={-1}
          aria-labelledby="EducationAddLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
            <EducationAdd></EducationAdd>
          </div>
        </div>
      </div>
      {/* Edit Start */}
      <div>
        {/* Project Add Modal */}
        <div
          className="modal fade rounded-0"
          id="EducationEdit"
          tabIndex={-1}
          aria-labelledby="EducationEditLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
            <EducationEdit></EducationEdit>
          </div>
        </div>
      </div>
      {/* Add edit Modal End */}
    </div>
  );
};

export default AllEducation;
