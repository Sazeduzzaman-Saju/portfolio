import toast from "react-hot-toast";
import ExperienceAdd from "./Form/ExperienceAdd";
import ExperienceEdit from "./Form/ExperienceEdit";
import { useQuery } from "@tanstack/react-query";

const Experience = () => {
  const {
    data: experiences,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const response = await fetch("https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/experiences");
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
  const handleRemove = (exp) => {
    fetch(`https://portfolio-server-osbt6h8tz-sazeduzzzaman.vercel.app/experiences/${exp._id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("experiences Post Deleted");
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
          <h2>Experience</h2>
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
                  data-bs-target="#ExperienceAdd"
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
                        Company Name
                      </th>
                      <th scope="col" width={"20%"}>
                        Designation
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
                    {experiences.map((exp, index) => (
                      <tr key={exp._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{exp.company_name}</td>
                        <td>
                          <span className="text-muted">{exp.designation}</span>
                        </td>
                        <td>
                          {" "}
                          <span className="text-info">2023</span>
                        </td>
                        <td>
                          <span className="text-info">2023</span>
                        </td>
                        <th scope="row">
                          <div className="">
                            <a
                              href="javascript:void();"
                              className="text-muted me-3 action_icon_color"
                              data-wow-delay=".6s"
                              data-bs-toggle="modal"
                              data-bs-target="#ExperienceEdit"
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
                              onClick={() => handleRemove(exp)}
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
          id="ExperienceAdd"
          tabIndex={-1}
          aria-labelledby="ExperienceAddLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
            <ExperienceAdd></ExperienceAdd>
          </div>
        </div>
      </div>
      {/* Edit Start */}
      <div>
        {/* Project Add Modal */}
        <div
          className="modal fade rounded-0"
          id="ExperienceEdit"
          tabIndex={-1}
          aria-labelledby="ExperienceEditLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered rounded-0 modal-lg">
            <ExperienceEdit></ExperienceEdit>
          </div>
        </div>
      </div>
      {/* Add edit Modal End */}
    </div>
  );
};

export default Experience;
