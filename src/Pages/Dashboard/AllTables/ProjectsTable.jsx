/* eslint-disable react/prop-types */
const ProjectsTable = ({ project }) => {
  const { projectImage, project_title } = project;

  return (
    <tr>
      <th scope="row">1</th>
      <td>
        <img
          className="rounded-1 shadow-lg"
          width={"50px"}
          src={projectImage}
          alt=""
        />
      </td>
      <td>
        <span className="text-muted">{project_title}</span>
      </td>
      <td>
        <a
          href={project.project_live_link}
          target="_blank"
          className="text-primary"
          rel="noreferrer"
        >
          {project.project_live_link}
        </a>
      </td>
      <td>
        <span className="badge bg-dark rounded-2 me-1">React</span>
        <span className="badge bg-dark rounded-2 me-1">Bootstrap</span>
        <span className="badge bg-dark rounded-2 me-1">Node Js</span>
      </td>
      <th scope="row">
        <div className="">
          <a
            href="javascript:void();"
            className="text-muted me-3 action_icon_color"
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
  );
};

export default ProjectsTable;
